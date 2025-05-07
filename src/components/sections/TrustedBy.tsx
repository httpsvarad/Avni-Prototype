import React from 'react';

const TrustedBy: React.FC = () => {
  const logos = [
    { id: 1, name: 'UNICEF', logo: 'https://media-hosting.imagekit.io/d59146c8c2b44c89/screenshot_1746603383869.png?Expires=1841211383&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=j4Q5wapkDTFDsEHWml~rIV1WaGhXXD1sjyF~PDMhmf8hVyj9SYXRNGsq~LalQ3u~28oy~pvwr~LfKmAUmPxe5u~L0oLqdH3SNhrViA9COuf1uUktuUcVNeN~2CjLpbZeWK5DbRixZ62xUu0oT9Fo6pNS~tTzFnmxGYkFUeu2SlqKIePQ487yFVR6lyUXG52zD3~0UnAYWNFVodZp~4LH2MlzL67JmJ2KtycSFZ2f~1VhmSM402-tuqFarhnCPlxwpDAHW5bWPjc2-f2PGdBhs-I3JWPtn9FBuCBWSx5g0YeqUHnkdEjTzf4P6ihp80hWKEchWuyyuGU~~8phgMiWiQ__' },
    { id: 2, name: 'PATH', logo: 'https://media-hosting.imagekit.io/d59146c8c2b44c89/screenshot_1746603383869.png?Expires=1841211383&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=j4Q5wapkDTFDsEHWml~rIV1WaGhXXD1sjyF~PDMhmf8hVyj9SYXRNGsq~LalQ3u~28oy~pvwr~LfKmAUmPxe5u~L0oLqdH3SNhrViA9COuf1uUktuUcVNeN~2CjLpbZeWK5DbRixZ62xUu0oT9Fo6pNS~tTzFnmxGYkFUeu2SlqKIePQ487yFVR6lyUXG52zD3~0UnAYWNFVodZp~4LH2MlzL67JmJ2KtycSFZ2f~1VhmSM402-tuqFarhnCPlxwpDAHW5bWPjc2-f2PGdBhs-I3JWPtn9FBuCBWSx5g0YeqUHnkdEjTzf4P6ihp80hWKEchWuyyuGU~~8phgMiWiQ__' },
    { id: 3, name: 'CARE', logo: 'https://media-hosting.imagekit.io/d59146c8c2b44c89/screenshot_1746603383869.png?Expires=1841211383&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=j4Q5wapkDTFDsEHWml~rIV1WaGhXXD1sjyF~PDMhmf8hVyj9SYXRNGsq~LalQ3u~28oy~pvwr~LfKmAUmPxe5u~L0oLqdH3SNhrViA9COuf1uUktuUcVNeN~2CjLpbZeWK5DbRixZ62xUu0oT9Fo6pNS~tTzFnmxGYkFUeu2SlqKIePQ487yFVR6lyUXG52zD3~0UnAYWNFVodZp~4LH2MlzL67JmJ2KtycSFZ2f~1VhmSM402-tuqFarhnCPlxwpDAHW5bWPjc2-f2PGdBhs-I3JWPtn9FBuCBWSx5g0YeqUHnkdEjTzf4P6ihp80hWKEchWuyyuGU~~8phgMiWiQ__' },
    { id: 4, name: 'Mercy Corps', logo: 'https://media-hosting.imagekit.io/d59146c8c2b44c89/screenshot_1746603383869.png?Expires=1841211383&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=j4Q5wapkDTFDsEHWml~rIV1WaGhXXD1sjyF~PDMhmf8hVyj9SYXRNGsq~LalQ3u~28oy~pvwr~LfKmAUmPxe5u~L0oLqdH3SNhrViA9COuf1uUktuUcVNeN~2CjLpbZeWK5DbRixZ62xUu0oT9Fo6pNS~tTzFnmxGYkFUeu2SlqKIePQ487yFVR6lyUXG52zD3~0UnAYWNFVodZp~4LH2MlzL67JmJ2KtycSFZ2f~1VhmSM402-tuqFarhnCPlxwpDAHW5bWPjc2-f2PGdBhs-I3JWPtn9FBuCBWSx5g0YeqUHnkdEjTzf4P6ihp80hWKEchWuyyuGU~~8phgMiWiQ__' },
    { id: 5, name: 'Sewa Rural', logo: 'https://media-hosting.imagekit.io/d59146c8c2b44c89/screenshot_1746603383869.png?Expires=1841211383&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=j4Q5wapkDTFDsEHWml~rIV1WaGhXXD1sjyF~PDMhmf8hVyj9SYXRNGsq~LalQ3u~28oy~pvwr~LfKmAUmPxe5u~L0oLqdH3SNhrViA9COuf1uUktuUcVNeN~2CjLpbZeWK5DbRixZ62xUu0oT9Fo6pNS~tTzFnmxGYkFUeu2SlqKIePQ487yFVR6lyUXG52zD3~0UnAYWNFVodZp~4LH2MlzL67JmJ2KtycSFZ2f~1VhmSM402-tuqFarhnCPlxwpDAHW5bWPjc2-f2PGdBhs-I3JWPtn9FBuCBWSx5g0YeqUHnkdEjTzf4P6ihp80hWKEchWuyyuGU~~8phgMiWiQ__' },
    { id: 6, name: 'Yenepoya University', logo: 'https://media-hosting.imagekit.io/d59146c8c2b44c89/screenshot_1746603383869.png?Expires=1841211383&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=j4Q5wapkDTFDsEHWml~rIV1WaGhXXD1sjyF~PDMhmf8hVyj9SYXRNGsq~LalQ3u~28oy~pvwr~LfKmAUmPxe5u~L0oLqdH3SNhrViA9COuf1uUktuUcVNeN~2CjLpbZeWK5DbRixZ62xUu0oT9Fo6pNS~tTzFnmxGYkFUeu2SlqKIePQ487yFVR6lyUXG52zD3~0UnAYWNFVodZp~4LH2MlzL67JmJ2KtycSFZ2f~1VhmSM402-tuqFarhnCPlxwpDAHW5bWPjc2-f2PGdBhs-I3JWPtn9FBuCBWSx5g0YeqUHnkdEjTzf4P6ihp80hWKEchWuyyuGU~~8phgMiWiQ__' },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-xl text-center text-gray-600 mb-8 font-medium">
          Trusted by leading organizations around the world
        </h2>
        
        <div className="overflow-hidden">
          <div className="flex items-center justify-center flex-wrap gap-8 md:gap-12">
            {logos.map((logo) => (
              <div 
                key={logo.id} 
                className="w-24 h-16 md:w-32 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={logo.logo} 
                  alt={`${logo.name} logo`} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;