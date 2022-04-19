import { result } from "@/store/storeTypes"
interface Props{
  result:result
}
export function TestimonialRow({result}:Props){
  return <div className="flex-row-align">
  <img width="32px" src={result.track.icon_url}/>

  <img width="42px" src={result.mentor.avatar_url}/>
  <div>{result.mentor.handle}</div>
  <div>{result.exercise.title}</div>
  <div>{result.content}</div>
  </div>
}