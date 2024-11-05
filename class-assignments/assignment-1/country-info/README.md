Assingment 1 : Building a Next.js Application with Dynamic Routes

Create a dynamic routing system:
Set up dynamic routes for country names using the app router in Next.js. Each route will dynamically display details for a specific country based on the URL.
Create a country listing page:
Build a static page that lists five countries of your choice. Each country name should be clickable, linking to its respective dynamic route (e.g., /country/[country_name]).
On the dynamic route page, display the following details for the selected country
Name
Population
Capital

Use a JavaScript object to store the details of the countries you want to display. For each country, you should include the name, population, and capital. When a user visits the dynamic route for a specific country (e.g., / country /canada), the application should search for that country in the object.

1. If the country is found in the object, display the country’s details.
2.If the country is not found, display a message: "Country not found."