import createHash from "hash-generator";
import Identicon from "identicon.js";

export function genIdenticon(hash:string){
  return new Identicon(hash, 60).toString(); 
}
export function hashAndAvatarGenerator(hashLength:number, num:number) {
  let result = [];
  for (let i = 0; i < num; i++) {
    let hash = createHash(hashLength);
    result.push({ id: hash, avatar: genIdenticon(hash) });
  }
  return result;
}
