import customerData from "./customers.json";
class CustomerService {
  async getCustomersById(id: number) {
    const customerDataList = customerData;
    const customerObj = customerDataList.find(
      (customer) => customer.customerId === id,
    );

    if (!customerObj) {
      return Promise.reject("Given customerId not found");
    }
    return customerObj;
  }

  async getCustomersWithSearch(search?: string, skip?: number, limit?: number) {
    const simpleQuery = search.toLowerCase();

    let customerList = customerData;
    if (simpleQuery) {
      customerList = customerList.filter((cust) => {
        return (
          cust.firstName.toLowerCase().startsWith(simpleQuery) ||
          cust.lastName.toLowerCase().startsWith(simpleQuery) ||
          cust.city.toLowerCase().startsWith(simpleQuery)
        );
      });
    }

    return customerList.slice(+skip, +limit + +skip);
  }

  async addCustomersWithValidation(
    firstName: string,
    lastName: string,
    city: string,
    company: string,
  ) {
    if (!firstName || !lastName || !city || !company) {
      throw "All fields are required";
    }

    const checkCustomerCityAndCompany = customerData.find(
      (c) => c.city === city && c.company === company,
    );

    if (!checkCustomerCityAndCompany) {
      throw "City or company does not exist for any customer";
    }
    //Creating a new customer object
    const newCustomer = {
      customerId: customerData.length + 1,
      firstName: firstName,
      lastName: lastName,
      city: city,
      company: company,
    };
    // Push the new customer to the data array
    customerData.push(newCustomer);
    return customerData;
  }

  async getNumberOfCustomersForUniqueCities() {
    const empCount = {};
    customerData.forEach((item) => {
      empCount[item.city] = empCount[item.city] || 0;
      empCount[item.city]++;
    });
    return empCount;
  }
}

const customerService = new CustomerService();
export default customerService;
