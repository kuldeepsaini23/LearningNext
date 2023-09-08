export default function UserProfilePage({params}:any){
  return(
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr/>
      <p className="text-4xl">Profile Page:
        <span className="rounded-lg bg-orange-400">{params.id}</span>
      </p>
    </div>
  )
}