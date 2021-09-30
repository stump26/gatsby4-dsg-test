import Identicon from "identicon.js";

export function genIdenticon(hash:string){
  return new Identicon(hash, 60).toString(); 
}