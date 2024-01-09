


export default function Price ({newPrice,promo,oldPrice}) {
    return (
        <div className="flex justify-between mt-6">
            <div className="flex gap-2 items-center">
            <p className="font-bold text-2xl">{newPrice}</p>
            <p className="font-bold bg-orange-200 text-orange-500 rounded-sm pl-1 pr-1">{promo}</p>
            </div>
            <p className="mr-2 text-slate-400 line-through">{oldPrice}</p>
        </div>
    )
}