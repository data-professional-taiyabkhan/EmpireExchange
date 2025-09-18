import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://empireexchange.co.uk';
  const lastModified = new Date();
  
  return [
    // Main pages
    { 
      url: baseUrl, 
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0
    },
    { 
      url: `${baseUrl}/about`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    { 
      url: `${baseUrl}/products`, 
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    { 
      url: `${baseUrl}/wholesale`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    { 
      url: `${baseUrl}/careers`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    { 
      url: `${baseUrl}/contact`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    
    // Product categories
    { 
      url: `${baseUrl}/products/rice`, 
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    { 
      url: `${baseUrl}/products/spices`, 
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    { 
      url: `${baseUrl}/products/legumes`, 
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    { 
      url: `${baseUrl}/products/essentials`, 
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    
    // Rice subcategories
    { 
      url: `${baseUrl}/products/rice/basmati-1121`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    { 
      url: `${baseUrl}/products/rice/golden-sella`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    { 
      url: `${baseUrl}/products/rice/sona-masoori`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    { 
      url: `${baseUrl}/products/rice/parboiled-rice`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    
    // Spices subcategories
    { 
      url: `${baseUrl}/products/spices/turmeric`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    { 
      url: `${baseUrl}/products/spices/chili`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    { 
      url: `${baseUrl}/products/spices/coriander`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    { 
      url: `${baseUrl}/products/spices/cumin`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    { 
      url: `${baseUrl}/products/spices/masala-blends`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    { 
      url: `${baseUrl}/products/spices/whole-and-ground`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    
    // Legumes subcategories
    { 
      url: `${baseUrl}/products/legumes/toor-dal`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    { 
      url: `${baseUrl}/products/legumes/chana`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    { 
      url: `${baseUrl}/products/legumes/masoor`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    { 
      url: `${baseUrl}/products/legumes/red-green-lentils`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    { 
      url: `${baseUrl}/products/legumes/kidney-beans`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    { 
      url: `${baseUrl}/products/legumes/chickpeas`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    
    // Essentials subcategories
    { 
      url: `${baseUrl}/products/essentials/atta-flour`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    { 
      url: `${baseUrl}/products/essentials/edible-oils`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    { 
      url: `${baseUrl}/products/essentials/pickles`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    { 
      url: `${baseUrl}/products/essentials/condiments`, 
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
  ];
}
