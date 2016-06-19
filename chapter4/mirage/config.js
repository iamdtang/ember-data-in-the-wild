export default function() {
  this.get('/contacts', function() {
    return {
      "data": {
        "type": "contacts",
        "id": "1",
        "attributes": {
          "first-name": "John",
          "last-name": "Doe"
        },
        "relationships": {
          "pets": {
            "data": [{
              "id": 1,
              "type": "pets"
            }, {
              "id": 2,
              "type": "pets"
            }]
          },
          "company": {
            "data": {
              "id": 1,
              "type": "companies"
            }
          }
        }
      },
      "included": [{
        "type": "pets",
        "id": "1",
        "attributes": {
          "name": "Fiona"
        }
      }, {
        "type": "pets",
        "id": "2",
        "attributes": {
          "name": "Biscuit"
        }
      }, {
        "type": "companies",
        "id": "1",
        "attributes": {
          "name": "Apple"
        }
      }]
    }
  });
}
