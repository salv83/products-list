# Description

This Angular app is composed by three components: 
- App component
- List component
- Filters component

one service
- ProductslistService

two model product
- Product
- PriceRange

## Model
The model Product will be used to create the instances of our products. A Product object has the following properties

```
id: number;
name: string;
price: string;
description: string;
brand: string;
sku: string; 
url: string;
image: string;
```

The model PriceRange is used to identify the properties of the Price slider range selector that is used inside the Filter component to select products belonging to a range of price.


## Service

ProductslistService has the task to do the HTTP calls to the REST API. It has two main methods:
  - getAll()
  - getSelectedProducts(selectionData)
getAll is called during the app initilization to fill the product slide with all prodoct available to the endpoing
getSelectedProducts receive as parameters an object created by the filters component, each time the user make a filtering choice on the filter component, a selectionData will all the selected options is created and passed to the service  ProductslistService who will call the remote API with a query string built with specific parameter, then the service will receive the response and the view will be updated displaying only the products that respect the choices of the used.



## App component

Allows to the Filters component to communicate with the List component. When the user make a filtering choice, the filter component generate an event called "selectedFilterChanged", this event has attached an object that stores all the choices of the user, when this event happen the App component intercept this event and call the service to receive the new array of selected product and using the ViewChild decorator it updates the view setting the property pagedList of the List Component.


## List Component

Is the list of Products on the right side, it has two important properties:
products: is the array of products currently displayed
pagedList: is the paged array of product currently displayes
And two methods
- getAllProduct() - the is called on the app initilization to display all the products
- OnPageChange(event: PageEvent) - that manage the pagination of the products

## Filters Component

Is the componend displayed on the left side, is a form managed with Rective Forms, with three checkbox that are used to select specific type of products and a select box that is used to managing the sorting of the product list. 

- somethingChanged(formvalue: any) : is and event handler called when the user make a selection on the filtering form
- ngOnInit() - is called on the component initilization after the constructor and it initilizate the form
- getPriceRange(event) - is the event handler that manage the price slider, each time the user uses the price slider this event is called and it update the lower and upper bound of the price that will be used as filter
- formcheck(formvalue), create the object selectionValues, is the object that will be passed to the service used to create the query string with the filtering parameters. 
