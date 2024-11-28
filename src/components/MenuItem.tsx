import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
}

export default function MenuItem ({item} : MenuItemProps)  {
  return (
    <button
      className="border-2 border-teal-400 p-3 flex justify-between w-full hover:bg-teal-200"
    >
       <p>{item.name}</p>   
       <p className="font-black">${item.price}</p>   
    </button>
  )
}

