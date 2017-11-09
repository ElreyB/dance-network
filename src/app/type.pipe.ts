import { Pipe, PipeTransform } from "@angular/core";
import { Company } from "./company.model";

@Pipe({
  name: "type",
  pure: false
})
export class TypePipe implements PipeTransform {
  transform(input: Company[], desiredType) {
    let output: Company[] = [];
    if (desiredType === "modern") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].type.toLowerCase() === "modern") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === "jazz") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].type.toLowerCase() === "jazz") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === "ballet") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].type.toLowerCase() === "ballet") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === "contemporary") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].type.toLowerCase() === "contemporary") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
