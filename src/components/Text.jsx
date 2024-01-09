


export default function Text({brand,title,text}) {


    return(
        <div className="p-4 ">
        <p className="uppercase text-orange-500 font-bold text-xs pb-4 pt-2">{brand}</p>
        <h1 className="font-bold text-3xl w-3/4 pb-6">{title}</h1>
        <p className="text-slate-600">{text}</p>

        </div>
    )

}