function spinalCase(str) {
	str = str.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
	str = str.replace(/_+/g, "-");
	str = str.replace(/\s+/g, "-");
	console.log(str);
}

spinalCase("This Is Spinal Tap"); 
// should return "this-is-spinal-tap".

spinalCase('thisIsSpinalTap');
// should return "this-is-spinal-tap"

spinalCase("The_Andy_Griffith_Show");
// should return "the-andy-griffith-show" 

spinalCase("Teletubbies say Eh-oh");
// should return "teletubbies-say-eh-oh"

spinalCase("AllThe-small Things");
// should return "all-the-small-things"