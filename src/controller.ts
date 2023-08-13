import customerService from "./service";
import { Response, Request } from "express";

class CustomerController {
  /*
   2. API to list customers with search and pagination
 */
  async getCustomersWithSearch(request: Request, response: Response) {
    try {
      const res = await customerService.getCustomersWithSearch(
        request.query.search as string,
        +request.query.skip,
        +request.query.limit,
      );
      response.send(res);
    } catch (e) {
      response.status(500).send(e);
    }
  }

  /*
    3.API to get single customer data by its id.
  */
  async getCustomerById(request: Request, response: Response) {
    try {
      const res = await customerService.getCustomersById(+request?.params?.id);
      response.send(res);
    } catch (e) {
      response.status(500).send(e);
    }
  }
  /*
      4.API to list all the unique cities with number of customers from a particular city.
    */
  async getNumberOfCustomersForUniqueCities(
    request: Request,
    response: Response,
  ) {
    try {
      const res = await customerService.getNumberOfCustomersForUniqueCities();
      response.send(res);
    } catch (e) {
      response.status(500).send(e);
    }
  }
  /*
    5.Create an API to add a customer with validations.
      * All fields required and the city and company should already exists for an existing customer.
      No new city or company can be added.
  */
  async addCustomersWithValidation(request: Request, response: Response) {
    try {
      const res = await customerService.addCustomersWithValidation(
        request.body.firstName as string,
        request.body.lastName as string,
        request.body.city as string,
        request.body.company as string,
      );
      response.send(res);
    } catch (e) {
      response.status(500).send(e);
    }
  }
}
const customerController = new CustomerController();
export default customerController;
