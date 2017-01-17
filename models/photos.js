NEWSCHEMA('Photos').make(function(schema) {

  schema.setQuery(function(error, options, callback) {

    var pics = NOSQL('data');

    // Reads the photos in the data file
    pics.find().make(function(builder) {
      builder.callback(callback);
    });
  });

});
