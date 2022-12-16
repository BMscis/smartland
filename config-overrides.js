module.exports = function override(webpackConfig) {  
    webpackConfig.module.rules.push({  
      test: /\\.mjs$/,  
      include: /node_modules/,  
      type: "javascript/auto",  
    });
    
     webpackConfig.resolve.fallback = { 
      util:   require.resolve("util") ,
      http:   require.resolve("stream-http"),  
      https:  require.resolve("https-browserify"),  
      url:    require.resolve("url"),  
      crypto: require.resolve("crypto-browserify"),  
      stream: require.resolve("stream-browserify"),  
      ...webpackConfig.resolve.fallback,  
    };  
    return webpackConfig;  
  };