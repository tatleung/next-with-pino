# Better Logging in Next.js Apps with Pino

As the popularity of Next.js increases, so do the size and the complexity of the applications build with it. As season developers can attest, logging can be an extremely helpful tool for isolating problems during development and debugging production problems. The Next.js team recommends Pino for logging for Next.js applications. A good logging solution should support the following features:

1.  ability to set the logging level of each log statement,
2.  ability to send logging data to various transport targets, eg: console, file, etc.,
3.  support pretty format during development and JSON format for easy integration with other logging solutions,
4.  ability to set the logging level of each module/component without modifying the code of the module.

The first 3 items in the above list can be easily achieved with Pino. I will present a technique to achieve Item #4 in this article.

## Create the Sample App


```
npx create-next-app next-with-pino --typescript
```

The above command creates a new Next.js application for us to demonstrate the logging technique.

## Install the Pino Dependencies

The following command installs the only dependencies needed in this article:


```
npm install pino
```

[](https://gist.githubusercontent.com/tatleung/29e66ce732dc3f7a7cb72e529c607bc2)
