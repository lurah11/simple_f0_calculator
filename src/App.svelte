<script>
    const equation = `
    F_0 = \\int_{t=0}^{t=T} 10^{\\frac{T_t - T_{ref}}{z}} \\, dt`;

katex.render(equation, document.getElementById("equation"), {
    throwOnError: false,
});
</script>

<div class="flex-col">
    <h1 class="text-center text-blue-700">PERHITUNGAN F0 untuk Pangan Aseptik</h1>
    <h3>Parameter yang diketahui : </h3>
    <label for="z">Z value</label>
    <input id="z" type='number' class="rounded" min=0 max=100000000000000 />
    <div id="equation"></div>
</div>

