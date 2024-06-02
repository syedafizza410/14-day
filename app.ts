// *************** 100 days coding challenge "14 day" ***************** //


/* Q40 Album: Create objects for music albums.
Explain & TIP: Use functions to return objects. This exercise practices
creating and manipulating objects, and introducing optional function parameters.*/


function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));


/* Q41  Magicians: Display magician names from an array.
Explain & TIP: Passing arrays to functions allows for the manipulation or display of their 
contents in a centralized manner. This is useful for handling lists of data.*/


let magicians: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);


/* Q42 Great Magicians: Add "the Great" to magician names.
Explain & TIP: Modifying array contents within a function demonstrates how functions 
can change data. This shows the impact of passing arrays by reference.*/


function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

make_great(magicians); 
show_magicians(magicians);