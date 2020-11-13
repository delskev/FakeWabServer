# FakeWebServer (FWS)

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

## About <a name = "about"></a>

This project is a self made web server that enables you to mock any path with any method
that returns any body.

It's based on node and Express

## Getting Started <a name = "getting_started"></a>

To launch the server just type:
```bash
npm run dev
```
and the server will start on localhost:8080

### Prerequisites

To run this server with some endpoints, you just need to put specific .json
files in the resources folder. The .json need to have the following structure to work:

```json
{
    "name": "endpoint name",
    "description": "what it does (just for doc.)",
    "path": "/path/to/resource",
    "queryParam": {
        "name": "fooo"
    },
    "method": "GET", 
    "code": 200,
    "response": {
        "unfiltered": "Hello unknown",
        "filtered": "Hello fooo"
    }
}
```

### Installing

To launch the server just type:
```bash
npm run dev
```
and the server will start on localhost:8080

## Usage <a name = "usage"></a>

After the server started, you just go on http://localhost:3000/<PATH>
to get the answer from you mock endpoint
