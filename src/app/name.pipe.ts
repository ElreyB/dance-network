import { Pipe, PipeTransform } from "@angular/core";
import { Company } from "./company.model";

@Pipe({
  name: "name",
  pure: false
})
export class NamePipe implements PipeTransform {
  transform(input: Company[], desiredName) {
    let output: Company[] = [];
    if (desiredName != "allCompanies") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].companyName === desiredName) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
