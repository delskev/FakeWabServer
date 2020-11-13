import { Request, Response } from "express";
import { NodesController } from "../controllers/nodes.controller";
import * as fs from "fs";
import app from "../app";

const DEFAULT_PATH = "./resources/";
export class Routes {
  readonly files: string[];
  nodesController: NodesController = new NodesController();

  constructor() {
    this.files = fs.readdirSync(DEFAULT_PATH) as string[];
  }

  routes(app): void {
    this.files
      .map((stringPath) => DEFAULT_PATH.concat(stringPath))
      .map(path => JSON.parse(fs.readFileSync(path, 'utf8')))
      .forEach((file) => {
        app
          .route(file.path)[file.method.toLowerCase()](
            (req: Request, res: Response) => {
              console.log("Call to ", file.method, ":", file.path, " info:", file.name, "| queryParam:", file.queryParam, " -> ", file.description )
              res.header("Access-Control-Allow-Origin", "*").send( 
                JSON.stringify(req.query) === JSON.stringify(file.queryParam) ? file.response.filtered : file.response.unfiltered);
            }
          );          
          console.log("route added: ", file.method, ":" , file.path);
      });
  }
}