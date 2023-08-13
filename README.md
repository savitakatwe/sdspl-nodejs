# Node.js REST API for Customer Management

This repository contains a simple Node.js REST API that provides data about customers. The API follows the specified conditions:

1. Create a `customers.json` file with customer data.
2. List customers with search and pagination.
3. Get single customer data by ID.
4. List all unique cities with the number of customers from each city.
5. Add a customer with validations.

## Setup

1. Clone this repository to your local machine.
2. Install dependencies by running:

```bash
yarn install
````

## Start the server
```bash
yarn start:dev
```
The server will start on port 3002.

## API Endpoints
1. List Customers with Search and Pagination:
   - `GET /customer/getCustomersWithSearch`
      - Query Parameters:
        - search: Search term for filtering customers by first name, last name, or city. 
        - skip: Number of items to skip for pagination. 
        - limit: Number of items per page.
      - Example: /customer/getCustomersWithSearch?search=John&skip=0&limit=10 
2. Add a Customer with Validations:
   - `POST /customer/addCustomersWithValidation`
   - Request Body (JSON):

```json
{
    "firstName": "John",
    "lastName": "Doe",
    "city": "New York",
    "company": "ABC Corp"
}
```

3. List Unique Cities with Number of Customers:
   - `GET /customer/getNumberOfCustomersForUniqueCities`
4. Get Single Customer Data by ID:
   - `GET /customer/:id`

## Error Handling
- If an error occurs, the API responds with an appropriate error message and status code. 
- Ensure proper validation and handling of request data to prevent errors.