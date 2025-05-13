const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Diretórios para buscar imagens
const directories = [
  path.join(__dirname, '../public'),
  path.join(__dirname, '../src/assets')
];

// Formatos de imagem a serem processados
const imageExtensions = ['.jpg', '.jpeg', '.png'];

// Configurações de otimização
const sizes = [640, 1024, 1600]; // Tamanhos responsivos
const formats = ['webp', 'avif']; // Formatos modernos

/**
 * Otimiza as imagens encontradas nos diretórios especificados
 */
async function optimizeImages() {
  console.log('🖼️ Iniciando otimização de imagens...');
  
  let totalImages = 0;
  let processedImages = 0;
  
  // Processa cada diretório recursivamente
  for (const directory of directories) {
    await processDirectory(directory);
  }
  
  console.log(`✅ Otimização concluída! ${processedImages} de ${totalImages} imagens processadas.`);
  
  /**
   * Processa um diretório recursivamente
   */
  async function processDirectory(dir) {
    if (!fs.existsSync(dir)) {
      return;
    }
    
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        // Ignora diretórios especificados
        if (!entry.name.startsWith('_') && entry.name !== 'node_modules') {
          await processDirectory(fullPath);
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        
        if (imageExtensions.includes(ext)) {
          totalImages++;
          
          // Verifica se a imagem já foi otimizada antes
          const imageName = path.basename(entry.name, ext);
          const alreadyOptimized = formats.some(format => {
            return sizes.some(size => {
              const optimizedName = `${imageName}-${size}.${format}`;
              const optimizedPath = path.join(dir, optimizedName);
              return fs.existsSync(optimizedPath);
            });
          });
          
          // Otimiza apenas imagens não otimizadas antes ou se forçado
          if (!alreadyOptimized) {
            await optimizeImage(fullPath);
            processedImages++;
          }
        }
      }
    }
  }
  
  /**
   * Otimiza uma imagem gerando versões em diferentes tamanhos e formatos
   */
  async function optimizeImage(imagePath) {
    const dir = path.dirname(imagePath);
    const ext = path.extname(imagePath);
    const baseName = path.basename(imagePath, ext);
    
    console.log(`🔄 Processando: ${baseName}${ext}`);
    
    try {
      // Carrega a imagem usando sharp
      const image = sharp(imagePath);
      const metadata = await image.metadata();
      
      // Processa cada formato
      for (const format of formats) {
        // Processa cada tamanho
        for (const size of sizes) {
          // Mantém a proporção original
          const resizeOptions = {
            width: size,
            height: Math.round(size * (metadata.height / metadata.width)),
            fit: 'inside',
          };
          
          // Define nome do arquivo otimizado
          const outputFilename = `${baseName}-${size}.${format}`;
          const outputPath = path.join(dir, outputFilename);
          
          // Gera a versão otimizada
          await image
            .resize(resizeOptions)
            [format]({
              quality: format === 'webp' ? 80 : 65, // AVIF pode usar qualidade menor
              effort: format === 'avif' ? 4 : undefined, // Equilibrio entre velocidade e qualidade
            })
            .toFile(outputPath);
          
          console.log(`  ✓ Criado: ${outputFilename}`);
        }
      }
    } catch (error) {
      console.error(`  ❌ Erro ao processar ${imagePath}: ${error.message}`);
    }
  }
}

// Executa a otimização
optimizeImages()
  .catch(error => {
    console.error(`❌ Erro durante a otimização: ${error.message}`);
    process.exit(1);
  });