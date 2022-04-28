function switchVisible() {
    if (document.getElementById('Developer')) {

        if (document.getElementById('Developer').style.display == 'none') {
            document.getElementById('Developer').style.display = 'block';
            document.getElementById('Shopify').style.display = 'none';
        }
        else {
            document.getElementById('Developer').style.display = 'none';
            document.getElementById('Shopify').style.display = 'block';
        }
    }
}