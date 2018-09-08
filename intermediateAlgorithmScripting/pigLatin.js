function translatePigLatin(str) {
	// checks if the first letter is a consonant or a consonant cluster
	const strRegEx1 = /^([^aeiou]+)([a-z]+)/;
	console.log(str.replace(strRegEx1, function doRegex(strRegEx1,p1,p2,str){
		return p2+p1+"ay";
    }));
	const strRegEx2 = /^[aeiou]/;
	if (strRegEx2.test(str)) {
		console.log(str+"way");
	} 
}
  
  
translatePigLatin("california");
// should return "aliforniacay".

translatePigLatin("glove");
// should return "oveglay".

translatePigLatin("algorithm");
// should return "algorithmway".

translatePigLatin("eight");
// should return "eightway".