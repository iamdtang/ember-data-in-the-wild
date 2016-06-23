export default function() {
  this.get('/contacts/1', function() {
    return {
      "data": {
        "type": "contactModel",
        "id": "1",
        "attributes": {
          "first-name": "John",
          "last-name": "Doe"
        },
        "relationships": {
          "company": {
            "data": {
              "id": 1,
              "type": "companyModel"
            }
          }
        }
      },
      "included": [
        {
          "type": "companyModel",
          "id": "1",
          "attributes": {
            "name": "Apple"
          }
        }
      ]
    };
  });
}
