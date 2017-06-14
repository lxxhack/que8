module.exports = function main(input) {
    var num0=[0,1,0,2,0,2,2,1,2];
    var num1=[0,0,0,0,0,2,0,0,2];
    var num2=[0,1,0,0,1,2,2,1,0];
    var num3=[0,1,0,0,1,2,0,1,2];
    var num4=[0,0,0,2,1,2,0,0,2];
    var num5=[0,1,0,2,1,0,0,1,2];
    var num6=[0,1,0,2,1,0,2,1,2];
    var num7=[0,1,0,0,0,2,0,0,2];
    var num8=[0,1,0,2,1,2,2,1,2];
    var num9=[0,1,0,2,1,2,0,0,2];
    var num=[num0,num1,num2,num3,num4,num5,num6,num7,num8,num9];
    var digit=input.toString();
    var ret="";
    for (var k=0;k<3;k++)
    {
        for (var i=0;i<digit.length;i++)
        {
           for (var j=0;j<3;j++)
            {
                switch(num[parseInt(digit.charAt(i))][k*3+j])
                {
                    case 0:ret+='.';
                        break;
                    case 1:ret+='_';
                        break;
                    case 2:ret+='|';
                        break;
                }
            }
            if (i<digit.length-1)
                ret+=' ';
        }
        ret+='\n';
   }
   return ret;
};
