function autoComplete(input, latInput, lngInput) {
    if(!input) return;
    const dropdown = new google.maps.places.Autocomplete(input);

    dropdown.addListener("place_changed", () => {
        const place = dropdown.getPlace();
        console.log(place);
        latInput.value = place.geometry.location.lat();
        lngInput.value = place.geometry.location.lng();
    });

    input.on("keydown", (e) => {
        if(e.keycode === 13) e.preventDefault();
    })
}

export default autoComplete;