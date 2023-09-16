function isValidNumber(x)
{
    const changedNumber = parseInt(x);
    
    if (!isFinite(changedNumber) || isNaN(changedNumber)) return false;
    if (changedNumber != x) return false;
    if(changedNumber >= 1 && changedNumber <= 9) return true;
    else return false;
};
