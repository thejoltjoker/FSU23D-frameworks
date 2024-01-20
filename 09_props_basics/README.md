# React using props

## Task
In these exercises, we will explore how to use props to send information from one component (parent) to another component (child).

1. Start by creating a new React project using Vite.
2. In your new project, create a new component called `ReceiverOfData`. The purpose of this component is to receive data from the `App` component.
3. In the `ReceiverOfData` component, add a parameter to the function declaration. You can name this parameter `props`.
4. Go to the `App` component and remove much of the HTML content. Add `<ReceiverOfData />` inside the `App` component. Now, we will invoke the `ReceiverOfData` function and have the opportunity to send any information we want.
5. To send the information, add an attribute to the `<ReceiverOfData />` tag. This attribute will become the property in the `props` object that we can use. Try to come up with a suitable name for this attribute/property.
6. Now, you need to provide a value for the attribute. If you have chosen to send text, you can simply write the intended value. Otherwise, use interpolation to access the value you had in mind.
7. After creating your attribute, go back to `ReceiverOfData`, and you can now use the property with the same name as the attribute in your `props` object. Try to interpolate this in your component to make it appear on the screen.
8. You can now add various types of attributes/properties to the `props` object so that you can receive and use many things in your component. Try adding a number and a boolean and display them on the screen.

## Description

Create a basic React app using Vite and have it sum two numbers from input fields.

## Technologies Used

- React
- Vite
- Tailwind
- Visual Studio Code


