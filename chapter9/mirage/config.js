import Mirage from 'ember-cli-mirage';

export default function() {
  this.namespace = 'api';
  this.post('/contacts', function() {
    // return new Mirage.Response(400, {}, "Crap!");
    // return new Mirage.Response(422, {}, {
    //   "errors": [
    //     {
    //       "detail": "Name must be at least 2 characters.",
    //       "source": {
    //         "pointer": "data/attributes/name"
    //       }
    //     },
    //     {
    //       "detail": "Name must not contain any numbers",
    //       "source": {
    //         "pointer": "data/attributes/name"
    //       }
    //     }
    //   ]
    // });
    return new Mirage.Response(422, {}, {
      "errors": [
        {
          "attribute": "name",
          "messages": {
            "size": "Name must be at least 2 characters.",
            "alpha": "Name must be entirely alphabetic characters."
          }
        }
      ]
    });
    // return new Mirage.Response(422, {}, {
    //   "errors": {
    //     "name": "Name must be at least 2 characters."
    //   }
    // });
  });
}
