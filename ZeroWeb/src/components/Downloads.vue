<template>
<div class="compWrapper ubuntu-mono-regular">
    <h1 class="ubuntu-mono-regular">Device firmware binaries, additional files* & ZNM configurator. </h1>
    <h3 class="ubuntu-mono-regular">Firmware updates can be done automatically from ZNM configurator. Files being listed here is mostly for archival & conservation purposes.</h3>
    <h3 class="ubuntu-mono-regular">*Mainly Traktor TSI's // sources available @ nerds tabs</h3>
    <h3 class="ubuntu-mono-regular">If you don't know which one you need, get Windows (EXE)</h3>

    <table>
        <tr>
            <th>O.S (variant)</th>
            <th>Latest</th>
            <th>Legacy</th>
            <th>Nightly</th>
            <th>* Notes *</th>
        </tr>
        <tr>
            <td>Linux (AppImage)</td>
            <td>Download</td>
            <td>Show list</td>
            <td>Download</td>
            <td>Recommended</td>
        </tr>
        <tr>
            <td>Linux (Flatpak)</td>
            <td>Download</td>
            <td>Show list</td>
            <td>Download</td>
            <td>Have to deal with <br> flatpak permissions</td>
        </tr>
        <tr>
            <td>Linux (Native)</td>
            <td>See notes</td>
            <td>See notes</td>
            <td>See notes</td>
            <td>AUR or add PPA</td>
        </tr>
        <tr>
            <td>MacOS (Apple Silicon)</td>
            <td>Download</td>
            <td>Show list</td>
            <td>Download</td>
            <td> - </td>
        </tr>
        <tr>
            <td>MacOS (Intel CPU)</td>
            <td>Download</td>
            <td>Show list</td>
            <td>Download</td>
            <td>x64 only<br>El Capitan Min</td>
        </tr>
        <tr>
            <td>Windows (EXE)</td>
            <td>Download</td>
            <td>Show list</td>
            <td>Download</td>
            <td>x64 only<br>Win 10 Min</td>
        </tr>
        <tr>
            <td>Windows (MSI)</td>
            <td>Download</td>
            <td>Show list</td>
            <td>Download</td>
            <td>x64 only<br>Win 10 Min</td>
        </tr>
    </table>
</div>
</template>

<style scoped>
.compWrapper {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

table {
    width: 75%;
}

table, th, td {
  border: 2px solid;
  border-collapse: collapse;
  padding: 5px;
}
</style>

<script>

</script>
