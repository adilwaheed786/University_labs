var inp=document.getElementById('input');
var result=document.getElementById('input4');
function check()
{
    if(inp.value.length>0)
    {
        const compose = (f,g) => a => f(g(a));
        const g = (x) => x + 15
        const f = (x) => x / 2
        const fg = compose(f,g)
        result.value=fg(inp.value);
        inp.value="";
    }   
}


