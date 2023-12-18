$(document).ready(function () {
    getProvinces()

    $('#province').on('change', function () {
        $('tbody tr td').html('')
        let municipality = $('#municipality')
        if ($(this).val() === '') {
            municipality.html('<option value="">Select Municipality</option>')
            return
        }
        municipality.removeAttr('disabled')
        $('#selected-province').html($(this).find('option:selected').text())
        getMunicipalities()
    })

    $('#municipality').on('change', function () {
        $('tbody tr #selected-municipal, tbody tr #selected-barangay').html('')
        let barangay = $('#barangay')
        if ($(this).val() === '') {
            barangay.html('<option value="">Select Barangay</option>')
            return
        }
        barangay.removeAttr('disabled')
        $('#selected-municipal').html($(this).find('option:selected').text())
        getBarangays()
    })

    $('#barangay').on('change', function () {
        if ($(this).val() === '') {
            return
        }
        $('#selected-barangay').html($(this).find('option:selected').text())
    })
})

function getProvinces() {
    $.ajax({
        url: 'get_places.php',
        type: 'GET',
        data: {
            type: 1,
        },
        success: function (response) {
            if (response === '') {
                alert('No Provinces')
                return
            }
            let options = '<option value="">Select Province</option>' + response
            $('#province').html(options)
        },
    })
}

function getMunicipalities() {
    $.ajax({
        url: 'get_places.php',
        type: 'GET',
        data: {
            type: 2,
            province: $('#province').val(),
        },
        success: function (response) {
            if (response === '') {
                alert('No Municipality')
                return
            }
            let options =
                '<option value="">Select Municipality</option>' + response
            $('#municipality').html(options)
        },
    })
}

function getBarangays() {
    $.ajax({
        url: 'get_places.php',
        type: 'GET',
        data: {
            type: 3,
            municipal: $('#municipality').val(),
        },
        success: function (response) {
            if (response === '') {
                alert('No Barangay')
                return
            }
            let options = '<option value="">Select Barangay</option>' + response
            $('#barangay').html(options)
        },
    })
}
