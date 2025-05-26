// filepath: /home/kcaria/Documentos/Universidad/CIU/landings/landing-page/src/components/products/data.ts
export const productData = {
  // Mangueras hidráulicas
  hydraulic: [
    {
      title: "SAE 100 R1AT",
      variants: ["SAE 100 R1AT"],
      diameters: ["1/4\"", "5/16\"", "3/8\"", "1/2\"", "5/8\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\""],
      description: "Manguera hidráulica de una sola malla de acero. Ideal para aplicaciones de presión media en maquinaria agrícola, industrial y equipos móviles. Flexible, resistente al aceite y al desgaste.",
      specs: [
        "Norma: SAE J517 100R1AT",
        "Presión de trabajo: hasta 225 bar",
        "Refuerzo: 1 trenza de acero de alta resistencia",
        "Tubo interior: Caucho sintético (NBR) resistente a aceites",
        "Temperatura: –40 °C a +100 °C"
      ]
    },
    {
      title: "SAE 100 R2AT",
      variants: ["SAE 100 R2AT"],
      diameters: ["1/4\"", "5/16\"", "3/8\"", "1/2\"", "5/8\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\""],
      description: "Diseñada para soportar presiones más altas que la R1AT, gracias a su doble refuerzo de acero. Recomendada para sistemas hidráulicos exigentes en maquinaria pesada, construcción y equipos industriales.",
      specs: [
        "Norma: SAE J517 100R2AT",
        "Presión de trabajo: hasta 400 bar",
        "Refuerzo: 2 trenzas de acero",
        "Tubo interior: NBR",
        "Temperatura: –40 °C a +100 °C"
      ]
    },
    {
      title: "Mangueras de alta y ultra alta presión",
      variants: ["DIN EN 856 4SP", "DIN EN 856 4SH", "SAE 100 R12", "SAE 100 R13", "SAE 100 R15"],
      diameters: ["3/8\"", "1/2\"", "5/8\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\""],
      description: "Mangueras con múltiples capas de refuerzo, diseñadas para las condiciones más duras. Soportan presiones extremas y pulsaciones, ideales para minería, construcción y aplicaciones industriales de alto rendimiento.",
      specs: [
        "Presión de trabajo: hasta 600 bar (según modelo)",
        "Refuerzo: 4-6 espirales de acero",
        "Temperatura: –40 °C a +121 °C",
        "Aplicación: sistemas hidráulicos de muy alta presión",
        "Certificación: DIN EN 856 – ISO 3862 – SAE J517"
      ]
    },
    {
      title: "Mangueras termoplásticas y compactas",
      variants: ["SAE 100 R7", "SAE 100 R17"],
      diameters: ["1/8\"", "3/16\"", "1/4\"", "5/16\"", "3/8\"", "1/2\"", "5/8\"", "3/4\"", "1\""],
      description: "Mangueras livianas y flexibles con refuerzo textil o trenzado. Perfectas para espacios reducidos y aplicaciones donde se requiere aislamiento eléctrico. Usadas en sistemas hidráulicos y neumáticos de baja/media presión.",
      specs: [
        "Presión de trabajo: hasta 300 bar (según modelo)",
        "Refuerzo: trenza textil o 1-2 trenzas de acero",
        "Temperatura: –40 °C a +121 °C",
        "Aplicación: sistemas compactos con radio de curvatura corto",
        "Certificación: SAE J517 – ISO 11237 – ISO 3949"
      ]
    },
    {
      title: "Mangueras especiales",
      variants: ["DESOBSTRUCTORA", "MANGUERA JACK 10.000PSI", "MANGUERA JACK 15.000PSI"],
      diameters: ["1/8\"", "1/4\"", "3/8\"", "1/2\"", "3/4\""],
      description: "Mangueras para aplicaciones específicas como limpieza de cañerías, sistemas de alta presión y herramientas hidráulicas. Diseñadas para las condiciones más exigentes y aplicaciones especializadas.",
      specs: [
        "Presión de trabajo: 250-1035 bar (según modelo)",
        "Refuerzo: Capas textiles o múltiples capas de acero",
        "Temperatura: –40 °C a +100 °C",
        "Aplicación: Limpieza de cloacas, gatos hidráulicos, equipos de izaje",
        "Certificación: ISO 18752 – CE – SAE (según modelo)"
      ]
    }
  ],
  
  // Mangueras industriales
  industrial: [
    {
      title: "Mangueras PVC multipropósito",
      variants: ["TECFEED Tipo SOLYON", "HIGHFLEX TEA", "Manguera PVC TRANSLIQUID", "Manguera PVC TRANSLIQUID \"S\""],
      description: "Mangueras de PVC flexible con refuerzos textiles o espirales, ideales para transporte de líquidos y usos generales. Disponibles en versiones transparentes para visualizar el fluido.",
      specs: [
        "Tubo interior: Material flexible de PVC color transparente",
        "Refuerzo: Textil o espiral rígida según modelo",
        "Temperatura: -10°C a +60°C",
        "Aplicación: Transporte de líquidos, aspiración e impulsión"
      ]
    },
    {
      title: "Mangueras con refuerzo helicoidal",
      variants: ["TVA", "TRANSLIQUID"],
      description: "Mangueras con alma de refuerzo en forma helicoidal de PVC rígido o acero. Ofrecen buena resistencia a la abrasión, al impacto y a numerosos productos químicos, manteniendo su flexibilidad.",
      specs: [
        "Tubo: PVC flexible de color neutro cristal",
        "Refuerzo: Helicoidal de PVC rígido o acero",
        "Límites de Temperatura: -10ºC a 60ºC",
        "Certificación: ISO 9001:2008"
      ]
    }
  ],
  
  // Mangueras alimenticias
  food: [
    {
      title: "Mangueras para industria bodeguera",
      variants: ["PRIMEWINE", "TRANSMETAL SUPER", "METALPRESS WINE"],
      description: "Mangueras especialmente diseñadas para el transporte de vinos, mostos y otros líquidos de la industria vinícola. Fabricadas con materiales atóxicos que cumplen con las normativas alimentarias.",
      specs: [
        "Materiales aptos para contacto con alimentos",
        "Resistentes a la limpieza con vapor y productos químicos",
        "Superficie interna lisa para evitar depósitos",
        "Certificaciones alimentarias según normativas vigentes"
      ]
    }
  ],
  
  // Accesorios y conectores
  accessories: [
    {
      title: "Acoples y conectores hidráulicos",
      description: "Amplia gama de acoples y conectores para sistemas hidráulicos, compatibles con las principales normas internacionales (JIC, NPT, BSPP, BSPT, SAE).",
      specs: [
        "Fabricados en acero, acero inoxidable o latón",
        "Disponibles en diversos tamaños y configuraciones",
        "Tratamientos superficiales anticorrosión",
        "Alta resistencia a la presión y vibraciones"
      ]
    },
    {
      title: "Abrazaderas y sistemas de fijación",
      description: "Soluciones para el montaje seguro de mangueras en cualquier aplicación, incluyendo abrazaderas de diferentes materiales y sistemas de fijación especializados.",
      specs: [
        "Materiales: acero inoxidable, acero zincado, nylon",
        "Modelos: tipo worm, mariposa, T-bolt, U-bolt",
        "Rango de diámetros: desde 1/4\" hasta 6\"",
        "Resistentes a la corrosión y vibraciones"
      ]
    }
  ]
};