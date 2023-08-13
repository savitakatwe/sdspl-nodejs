import customerService from "./service";
import { Response, Request } from "express";

class CustomerController {
  async getCustomerById(request: Request, response: Response) {
    try {
      const res = await customerService.getCustomersById(+request?.params?.id);
      response.send(res);
    } catch (e) {
      response.status(500).send(e);
    }
  }

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
}
const customerController = new CustomerController();
export default customerController;
