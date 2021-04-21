import React from 'react'

export const AddTransaction = () => {

    return (
        <div>
<form>
    <label>
    Add Transaction
</label>
<input type="text" name="addTranscation"/>

<label>
    Amount(Income,Expense)
</label>
<input type="number" name="amount"/>

</form>
        </div>
    )
}
