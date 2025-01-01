<script>
</script>

<div class="flex-col justify-items-center ">
    <h1 class="text-center text-blue-700">PERHITUNGAN F0 untuk Pangan Aseptik</h1>
    <h4 class="underline decoration-purple-400 my-1">Parameter yang diketahui : </h4>
    <div class="flex-row justify-center">
        <label for="z">Z value</label>
        <input value=10 id="z" type='number' class="border border-blue-500 ml-4 my-1" min=0 max=100000000000000 />
        <span>oC</span>
    </div>
    <div class="flex-row justify-center">
        <label for="z">Tref value</label>
        <input value=121.1 id="tref" type='number' class="border border-blue-500" min=0 max=100000000000000 />
        <span>oC</span>
    </div>
    <h4 class="underline decoration-purple-400 my-1">Parameter yang ingin dicari : </h4>
    <div class="flex items-center justify-center space-x-4">
        <label class="flex items-center space-x-2">
          <input type="radio" value="F0" class="mx-2" />
          <span>F0</span>
        </label>
        <div class="relative group flex items-center">
          <span class="text-gray-500 cursor-pointer">ⓘ</span>
          <div class="absolute left-full top-1/2 ml-2 w-64 bg-gray-800 text-white text-sm p-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-1/2">
            F0 adalah lalalla yang perlu didefinisikan
          </div>
        </div>
    </div>
</div>

