<script>
  let z = $state(10.0);
  let tref = $state(121.1);
  let f0 = $state(0); 
  let time = $state(0);
  let temp = $state(0);
  let f0Calc = $derived(Math.pow(10,(temp-tref)/z) * time);

  const parameters = [
		{ label: 'F0', value: 1, desc:"F0 ( dalam menit) adalah waktu paparan yang setara pada suhu 121,11°C dari waktu paparan aktual pada suhu yang bervariasi" },
		{ label: 'T(Temperatur Proses)', value: 2, desc:"T ( dalam oC) adalah temperatur minimum saat proses sterilisasi" },
		{ label: 't(waktu kontak)', value: 3, desc:"t (dalam menit) adalah waktu kontak paling cepat saat proses sterilisasi" }
	];
	
	let selected = $state(parameters[0].value);
</script>

<div class="flex-col justify-items-center ">
    <h1 class="text-center text-blue-700">PERHITUNGAN F0 untuk Pangan Aseptik</h1>
    <h4 class="underline decoration-purple-400 my-1">Parameter yang diketahui : </h4>
    <div class="flex-row justify-center">
        <label for="z">Z value</label>
        <input bind:value={z} id="z" type='number' class="border border-blue-500 ml-4 my-1" min=0 max=100000000000000 />
        <span>oC</span>
    </div>
    <div class="flex-row justify-center">
        <label for="tref">Tref value</label>
        <input bind:value={tref} id="tref" type='number' class="border border-blue-500" min=0 max=100000000000000 />
        <span>oC</span>
    </div>
    <h4 class="underline decoration-purple-400 my-1">Parameter yang ingin dicari : </h4>
    <div class="flex flex-row space-x-4">
      <!-- First Div -->
      <div class="flex flex-col items-start">
        {#each parameters as param }
        <div class="flex items-center justify-center space-x-4">
          <label class="flex items-center space-x-2">
            <input name="parameter-radio" bind:group={selected} type="radio" value="{param.value}" class="mx-2" />
            <span>{param.label}</span>
          </label>
          <div class="relative group flex items-center">
            <span class="text-gray-500 cursor-pointer">ⓘ</span>
            <div class="absolute left-full top-1/2 ml-2 w-64 bg-gray-800 text-white text-sm p-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-1/2">
              {param.desc}
            </div>
          </div>
        </div>
        { /each }
      </div>        
    
      <!-- Image Div -->
      <div class="flex items-center border border-blue-500">
        <img width="200" height="200" src="{`./src/${selected}.png`}" alt="{selected}">
      </div>
    </div>
    <div>
      <div class="flex flex-col mt-3">
        {#if selected == 1}
          <div class="flex items-center space-x-4 my-1">
            <label for="2" class="w-64">t( waktu kontak dalam menit)</label>
            <input id="2" type="number" min="0.0" bind:value={time} class="border border-blue-500 flex-1" />
          </div>
          <div class="flex items-center space-x-4 my-1">
            <label for="3" class="w-64">T(Temp. proses dalam oC)</label>
            <input id="3" type="number" min="0.0" bind:value={temp} class="border border-blue-500 flex-1" />
          </div>
          <h3 class="text-green-500 mt-2">Hasil Perhitungan F0 = {f0Calc} menit</h3>
          <h3 class="text-green-500 mt-2">Dibulatkan menjadi {Math.round(f0Calc)} menit</h3>
        {/if}
      </div>    
        
    </div>
    

</div>

