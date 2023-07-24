import option from '../assets/mobile/icon-filter.svg'

export default function SearchBar({setSearch, handleSearch}) {
  return (
    <div className="flex justify-center items-center">
        <div className="w-[327px] h-[80px] bg-color10 flex items-center absolute justify-between " >
            <input onChange={(e) => setSearch(e.target.value)} placeholder="Filter by title..." className="bg-color10 text-color4 ml-[24px] outline-none"/>
            <img src={option} alt="pic"/>
            <div onClick={handleSearch} className="w-[48px] h-[48px] mr-[16px] bg-color9 flex justify-center items-center">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#ffff" fill-rule="nonzero"/></svg>
            </div>
        </div>
    </div>  
    )
}
