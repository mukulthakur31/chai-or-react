import React from 'react'

function Inputbox({
  label,
  amount,
  onAmountChange, 
  onCurrencyCChange,
  currencyOptions=[],
  selectCurrency='usd',
  amountDisable=false,
  currencyDisable=false,
  clasName="",
   }){
  

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex${clasName} `}>
    <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">
            {label}
        </label>
        <input
            
            className="outline-none w-full bg-transparent py-1.5"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            // jb bhi hamare pass amount change hone pr value aayegi to wo values string me aayegi tohme unhe numbers me convert krna pdega 
            onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
        />
    </div>
    <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={selectCurrency}
            onChange={(e)=>onCurrencyCChange && onCurrencyCChange(e.target.value)}
            disabled={currencyDisable}
        >
            
               {currencyOptions.map((currency)=>(
                // jb bhi hm react ke jsx function m loop kr rhe hote ha to keys deni chahiye kyuki react ko pta nhi chlta ki wo khi same value ko baar baar loop to nhi kr rhi ha to isse performance  degrade hota ha
                 <option value={currency} key={currency}>
                 {currency}   
                 </option>
               ))}
        
        </select>
    </div>
</div>
  )
}

export default Inputbox