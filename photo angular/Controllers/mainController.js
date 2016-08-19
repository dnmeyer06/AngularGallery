
myApp.controller('MainController', ['$scope', function($scope) { 

	$( "#slide" ).click(function() {
		$( ".gallery").css("display", "block");
		$( ".cap").css("display", "none");
		$( "#landing" ).animate({ "top": "-=80vh" }, 900).delay(400);
	});

	$scope.title = 'Dan Meyer Photography'; 
	$scope.landing = {
		"line1": 'I was born on the side of the highway,',
		"line2": 'been traveling ever since.'
	};

	$( ".grid-box" ).click(function() {
		$( "#landing").css("display", "none");
		$( ".gallery").css("display", "none");
		$( ".slideShow").css("display", "block");

		var location = $(this).data('place');
		var photosArray = photos[location];
		for (i = 0; i < photosArray.length; i++) {
			$( "#indGrid" ).append( "<div class='grid-box resizableImage' id='ind'><img src=" + photosArray[i] + "></div>")
		}
	});


	$scope.locations = [
	{
		name: 'Seattle',
		pic: 'img/seattle.jpg'
	},
	{
		name: 'Medellin, Colombia',
		pic: 'img/colombia.jpg'
	},
	{
		name: 'Paonia, CO',
		pic: 'img/Paonia.jpg'
	},
	{
		name: 'Huacachina, Peru',
		pic: 'img/Huacachina.jpg'
	},
	{
		name: 'Chile',
		pic: 'img/chile.jpg'
	},
	{
		name: 'Vida!',
		pic: 'img/vida.jpg'
	},
	{
		name: 'Marthas Vineyard',
		pic: 'img/mv.jpg'
	},
	{
		name: 'Bryce Canyon',
		pic: 'img/bryce.jpg'
	},
	{
		name: 'Torres del Paine, Chile',
		pic: 'img/tdp.jpg'
	},
	{
		name: 'Cambridge, MA',
		pic: 'img/cambridge.jpg'
	},
	{
		name: 'San Francisco',
		pic: 'img/sanfran.jpg'
	},
	{
		name: 'Commercial Work',
		pic: 'img/portfolio.jpg'
	}
	];

	var photos = {
		seattle: [
		"https://lh3.googleusercontent.com/-id1BVs9ncQw/VxWunrSBhlI/AAAAAAAANOQ/Sn_bg2yNlk4gf18YoIBIaPp3DHAyUmCFACCo/s800/DSCF1564.JPG",
		"https://lh3.googleusercontent.com/-OZs7f53WtfQ/VxWunrUDBGI/AAAAAAAANOQ/KVc-mcDICmUBAOcZtmjIYQQPyjyiKiF8wCCo/s800/DSCF1577.JPG", 
		"https://lh3.googleusercontent.com/-kNDgb74t_xk/VxWunonHVYI/AAAAAAAANOQ/JRvAGwPlHFEgnUzVMV3FUTfeO1XyLSe4wCCo/s800/DSCF1581.JPG",
		"https://lh3.googleusercontent.com/-yxSNUoT6T_E/VxWunq1DfQI/AAAAAAAANOQ/mX_BLLeh7BA2L-tVnVOFnaZzgNDk8vZnACCo/s800/DSCF1594.JPG",
		"https://lh3.googleusercontent.com/-Bw3WTzDgt0s/VxWunt1yqHI/AAAAAAAANOQ/oVoLmaZYVFYbikDORurKgLASbC-NuN9hwCCo/s800/DSCF1600.JPG",
		"https://lh3.googleusercontent.com/-AQLzljF4yXU/VxWuni3InUI/AAAAAAAANOQ/PUJ8no4Bh9cDiZ1b3ikP6uaC0PcwLkSxgCCo/s800/DSCF1669.JPG",
		"https://lh3.googleusercontent.com/-BdSwVafDPVQ/VxWunulP7WI/AAAAAAAANOQ/8oiNJ25mvyEssdoJNf4WdUXlxyjDhZDWwCCo/s800/DSCF1676.JPG",
		"https://lh3.googleusercontent.com/-Xuzd6B8wGvM/VxWuniINQgI/AAAAAAAANOQ/YKGj30kvSaoJF9FYhhxYMiSdwAYgFFFOACCo/s800/DSCF1759.JPG",
		"https://lh3.googleusercontent.com/-Um461YfL_yM/VxWunuUlEaI/AAAAAAAANOQ/khPSV9-TcDYcgToeWwfvjwpk6u6eI-cIACCo/s800/DSCF1794.JPG",
		"https://lh3.googleusercontent.com/-merH2FrLJlQ/VxWunmQkWHI/AAAAAAAANOQ/u2uKfSfhfOA-dPz7paRaK0NTAzJV0sAbACCo/s800/DSCF1810.JPG",
		"https://lh3.googleusercontent.com/-ZDF1qf1Cy3w/VxWunubN7pI/AAAAAAAANOQ/FmDBbDMPR8IUnGB_kbDklqwDLEEtoDMcwCCo/s800/DSCF1815.JPG",
		"https://lh3.googleusercontent.com/-Yiac7UnhUY4/VxWunrrFYvI/AAAAAAAANOQ/YtYCzG7dTAU6qqAs-OfsFUabaJuKUQNAgCCo/s800/DSCF1844.JPG",
		"https://lh3.googleusercontent.com/-6HjK6uU_J2I/VxWunvIQYuI/AAAAAAAANOQ/zTMwFoL2I4cRaX24evG6Bq2B70Cyu-VpwCCo/s800/DSCF1881.JPG"
		],

		colombia: [
		"https://lh3.googleusercontent.com/-mHosGtlHK10/V59rFk74IdI/AAAAAAAANOM/8PHsBX0NOJMc7rMGcJeuExKN5MQqEpcCQCCo/s800/DSCF1050.JPG",
		"https://lh3.googleusercontent.com/-eqWh522oYio/V59rFnfdkII/AAAAAAAANOM/Vzb_kTEQQjgLHgzAwyQoK69ufOL7ma4hACCo/s800/DSCF0663.JPG",
		"https://lh3.googleusercontent.com/-Nr4huPX063A/V59rFlGtd1I/AAAAAAAANOM/Lo6yVcHsfmYFDwmHQFTcxjR9AzuV--AOgCCo/s800/DSCF0670.JPG",
		"https://lh3.googleusercontent.com/-7YmAKrju8QY/V59rFg4JegI/AAAAAAAANOM/-E_QA9v_azwk53wtfxSN5kR8fFa2aguzgCCo/s800/DSCF0686.JPG",
		"https://lh3.googleusercontent.com/-HePbVaqs7Iw/V59rFqOi_DI/AAAAAAAANOM/iuXSJJ6GaNskiFmvFz90MvLDgmcdRpxZACCo/s800/DSCF0684.JPG",
		"https://lh3.googleusercontent.com/-fIrK7uhvLC4/V59rFg0VvBI/AAAAAAAANOM/z6AOz3xN0cUIge5tXqSZNFr8ZDaCCiLxgCCo/s800/DSCF1059.JPG",
		"https://lh3.googleusercontent.com/-8EJ33kXXqmg/V59rFgKscsI/AAAAAAAANOM/5xx4OpUNBLUBpjpJMmmGPEX2O0fDL8ReACCo/s800/DSCF0769.JPG",
		"https://lh3.googleusercontent.com/-XsaXehfLJBk/V59rFuatF6I/AAAAAAAANOM/3gNRbOF6J0wEU_FeJjwumMgpnyC_u_CRQCCo/s800/DSCF1054.JPG",
		"https://lh3.googleusercontent.com/-trlvjKh4JnQ/V59rFtjj45I/AAAAAAAANOM/KXHGRnZAcIAOxHHGWZ7OSccYd6hn5iL_gCCo/s800/DSCF0887.JPG",
		"https://lh3.googleusercontent.com/-BdBCLd7FLz4/V59rFik8mtI/AAAAAAAANOM/aoX21bAAIgIkdDyqPuVoZcx0auM5mkMWACCo/s800/DSCF0897.JPG",
		"https://lh3.googleusercontent.com/-JfyOR4jQiLc/V59rFsTLdJI/AAAAAAAANOM/dMYt0vou5A4FeD2ozveAV1AFI6G0BxM4ACCo/s800/DSCF0934.JPG",
		"https://lh3.googleusercontent.com/-k4A7guw9oXk/V59rFiOAMEI/AAAAAAAANOM/6p5EgctUUXs8-Yj_Tl26P95SJ4Hy4QUZQCCo/s800/DSCF1306.JPG",
		"https://lh3.googleusercontent.com/-b1sj4PssHnc/V59rFkn1ePI/AAAAAAAANOM/nJwemyb8Mzsw1xpNVu2RjWZG5RpSMTuOgCCo/s800/DSCF1309.JPG",
		"https://lh3.googleusercontent.com/-fWCmxSZPqxs/V59rFteJZoI/AAAAAAAANOM/i3CbpXo4Vps32-RBONgHJ0Qd2v1z-9hQgCCo/s800/DSCF1175.JPG"
		],

		vida: [
		"https://lh3.googleusercontent.com/-1EhMqF0wx18/V6Dcsh7CmMI/AAAAAAAANQ4/ScQYCCq_qY0IndCx-yWQEiTSMC75t3X-wCCo/s800/DSCF2771.JPG",
		"https://lh3.googleusercontent.com/-CzLQfKgFDA0/V6DdLoeJGrI/AAAAAAAANRI/Lq_2-qYEaMoYU-fAoB_c5yeCj-h_iXPPQCCo/s800/DSCF2521.JPG",
		"https://lh3.googleusercontent.com/-9SYCwpAlpyM/V6DdMn11JkI/AAAAAAAANRg/sW7XNlrGXf0y2LTCzBJy2kgKoo8WHj6sACCo/s800/DSCF2532.JPG",
		"https://lh3.googleusercontent.com/-un79P49Ufro/V6Dcr56UyvI/AAAAAAAANQ4/9PVajO6TvnYk6jkaBMistZERhkCkGQM6gCCo/s800/DSCF2767.JPG",
		"https://lh3.googleusercontent.com/-JyCH7yqF51Q/V6DeVpL4Q8I/AAAAAAAANTs/bAwvmHdhYN4YtYcFHO1CUrUhkfcUJtQgACCo/s800/DSCF0066.JPG",
		"https://lh3.googleusercontent.com/-tY3NgADDbQg/V6DezoabNiI/AAAAAAAANUo/IsMW3y3dPzUh0vtVOl0Ky6wBTgEU-atuQCCo/s800/DSCF0208.JPG",
		"https://lh3.googleusercontent.com/-lP0oj0PXyu8/V6DfTA9dLcI/AAAAAAAANVY/tRU197OtNuksWOhclNQsVHIwX6VMIkkHACCo/s800/DSCF0607.JPG",
		"https://lh3.googleusercontent.com/-_w98yJcPybg/V6DfUQaI0XI/AAAAAAAANVk/o5gJIyMYwTAJ4siaga2m3EWUe23jYpEvACCo/s800/DSCF0612.JPG",
		"https://lh3.googleusercontent.com/-vV12al0WjEc/V6Dcw8HD8xI/AAAAAAAANT0/A613-749tX4nrpcGPksXdUh23UTjng3_QCCo/s800/DSCF2790.JPG"

		],

		paonia: [
		"https://lh3.googleusercontent.com/-hDYcdevC_gI/VxWUcUO8zRI/AAAAAAAANMg/v_seWw1hxXwd_MNLWF808b_qvLv6kfV6ACCo/s800/DSCF2243.JPG",
		"https://lh3.googleusercontent.com/-ILFbsnyWUDU/VxWUcY--H1I/AAAAAAAANMg/rW5fWkpqKpk6fRlHOQ29bGyR-ZmYz9zXwCCo/s800/DSCF1995.JPG",
		"https://lh3.googleusercontent.com/-AS_ByRv268c/VxWUcRTsOCI/AAAAAAAANMg/46M3xWZ2tj4eTVWf8ISVt44xuh2cB6RjACCo/s800/DSCF2002.JPG",
		"https://lh3.googleusercontent.com/-zQImwg-5a-4/VxWUcQlikQI/AAAAAAAANMg/qjiB8tHNftEDU6SpwNZCOvIZgwoPpzxawCCo/s800/DSCF2026.JPG",
		"https://lh3.googleusercontent.com/-Jbh5ApJeuTY/VxWUcUssVSI/AAAAAAAANMg/ZOJTPVjmagc5gZr-CJkwZZ3KCaPYDaP_QCCo/s800/DSCF2101.JPG",
		"https://lh3.googleusercontent.com/-5-yGdLHSP60/VxWUcdctVxI/AAAAAAAANMg/fTJ34Gge_LcA-Yp6S5hd-qfWsx3kAecpQCCo/s800/DSCF2121.JPG",
		"https://lh3.googleusercontent.com/--LQ7tgV1TuI/VxWUcV6fRRI/AAAAAAAANMg/IDNhKhFCVv0EO0ZlaQa_jNNLA38Q03GwQCCo/s800/DSCF2135.JPG",
		"https://lh3.googleusercontent.com/-_jPfAmTiImY/VxWUcew_gRI/AAAAAAAANMg/Ch_dlXNh8Bcjt0J3b3l6PZE-_ANDjGZ9ACCo/s800/DSCF2159.JPG",
		"https://lh3.googleusercontent.com/-4CA6gM0VkQg/VxWUcacJJJI/AAAAAAAANMg/1yX3cWVrz1ccSgTaUujmrO-w5XzyIAoHgCCo/s800/DSCF2170.JPG",
		"https://lh3.googleusercontent.com/-x120dsnbU5Y/VxWUcZnurmI/AAAAAAAANMg/0I_R7NbRJrct2hZNNPd7W-j5Cnl9vQVPACCo/s800/DSCF2179.JPG",
		"https://lh3.googleusercontent.com/-poJd-2Fn50Y/VxWUcYKdd4I/AAAAAAAANMg/KToiwJ0H_S4eKPxGfCv0aKAaxvMKZzqyACCo/s800/DSCF2193.JPG",
		"https://lh3.googleusercontent.com/-SKn85Az9c_8/VxWUcQArEdI/AAAAAAAANMg/M_gzqBKLDAEEmI-Od8f7qWt8ZJFcNDn7QCCo/s800/DSCF2222.JPG",
		"https://lh3.googleusercontent.com/-SBUnMrEXBvk/VxWUcZb8ceI/AAAAAAAANMg/M5YnM12uMwkhCahGdKzkTtpTaZIJSe8AgCCo/s800/DSCF2227.JPG",
		"https://lh3.googleusercontent.com/-DJ_10Rey8yg/VxWUcdm5veI/AAAAAAAANMg/XyKYQRS4hRsVWRAdvJpbnVeRphFITWsSgCCo/s800/DSCF2345.JPG"
		],

		bryce: [
		"https://lh3.googleusercontent.com/-mOBAnbD4jkI/V6NomuNUOOI/AAAAAAAANeE/VdA6Onmfp6ov8UATKCMSkFe619_MHknNwCCo/s800/IMG_1885.JPG",
		"https://lh3.googleusercontent.com/-Cutjz9Y3H3c/V6NonRuXTeI/AAAAAAAANeE/glDfMgiKR-k0TMICLz_SBWgKu2I7jX5RACCo/s800/IMG_1887.JPG",
		"https://lh3.googleusercontent.com/-4_A0cq50SjE/V6NoqL24jFI/AAAAAAAANeE/TfGBPRHm8CkUoNLkx6MmrvJ-j-3JiYtGwCCo/s800/IMG_1897.JPG",
		"https://lh3.googleusercontent.com/-Cyrglk_DYAA/V6NotHyvcuI/AAAAAAAANeE/N5WVvVRGP-oT5wBTUsOu4SprjXzPc-8EwCCo/s800/IMG_1906.JPG",
		"https://lh3.googleusercontent.com/-4IC-ik8RqJU/V6No2KZXvxI/AAAAAAAANeE/Na15tn9fay8P42pOCs5HI5nwz1kRONTmgCCo/s800/IMG_1937.JPG",
		"https://lh3.googleusercontent.com/-iRGOQYw7Ktg/V6No5BJ2pMI/AAAAAAAANeE/RF-GNZn9rzkeBpM6eTPn5MuLhvC16c9_gCCo/s800/IMG_1946.JPG",
		"https://lh3.googleusercontent.com/-R31XkdbxZ3Q/V6No8sbci3I/AAAAAAAANeE/cQNY8wgBxVkZ_QXu5dvLsRhHkRaNE95YgCCo/s800/IMG_1957.JPG",
		"https://lh3.googleusercontent.com/-8E3Vwg7cOZ0/V6No-QZKEwI/AAAAAAAANeE/LaG9vwtb4A0v1F5nWiaPufEYNGLuDxp7QCCo/s800/IMG_1961.JPG"
		],
		Huacachina: [
		"https://lh3.googleusercontent.com/J5ZUFoZ2UGJvwPj_8W5YzQdKxrtR4194i4TfiCH45Pmapr7VsQX3UF75z3bIlWCf7nkS3OpOB7i4m26ptag1bpoYnFcuEAUR9I_TK6rNBTAnydk8JCJH9r2Chx1O2Gr6jSaybTtnSv-sSXmfh5LD0nGqS21swiPQBT21CNulUzakJD7NVYE7bSdaHDrulYwaOKhqiJ5a4mKHUNkHxMYTQQTnFLqCvcyoye1eyk3Cyi42yLCshJCXlBiIfa2FnGORBxnVpATqncayWLXOL9zg3WcbLFSXEZ9qwazq78U5aX5-uNF6hiXj3D69M3qZU0xy-LON9bQ28QxjIS9EQzVNZMMIPdfor6LIC6R1N9tFFgKgxpdzOx_OfIFwUq5A4zl19GK2Mt5pEHE2BMgMWT8OVO2k3cRxHJvb_l1SD_xDQ9_EERj8nAm3AsKTHuc2c9AAirV9kTcSEeqD9DqDThj-2iZtpORycTvb-msUCfEEA7sS2OMpK1fCx5OvMG6D7KhWOQUUGA92yQrXOW6l3T0uSGqVWoxECoe62KfNw5uzVA7h5-egTSXXTi4dQ3PNjP6jWs5BxTbsr3_Km-fPFCMHXnFlLnUTLDE=w2612-h1958-no",
		"https://lh3.googleusercontent.com/TYd_7fsZ6WkPj3jYtnhLfy-nHY_lqEWV91UDwkLWUUcQg-kdZ70oNsP17IMfSVQrZ61Y6a7q-npl0rTz28wS6jwz8Z1Sxks1awPSQcrAebr9NNcWzGv7uThNRJMnMvHVx9gdS9diFA0bMcEsM2t0DPAElUXwewqskaJ1idcKwT8v6FXBxeThRsEVdkbx-ay-b7uNZpjeTOk7F4cI-S4kM0YorBtI8FiS-hnzFnIBF8fNkGUT0yiJUaHVKuhI57VKKAroW8Fvv-HSm3c-MKNrsAf_-nk9dUFIsktiOBoNVvlBMrco61jWD7iCkXnhsa7iJvYJtF_mTlsZboZo_NnroOobRAw4w_FhBV-GCsk6nu8gNk6cYJ-tuVkURoRQd2FBo1pU5qwR7P-EVdLkr-gF93tWLLBfwdYRgr2r0RfdL7NoCcY4lsgjoe_n9iNMb_Ai_qXLNZlTNozGAJl-MQmgIzMjOAegSwVJOlTfq3U1tcp4sBRy9R8Io-sIx_LgIYYxbTCQ2JJDRQ1Zy2hchzchFGxakbgYg2DuSDpN69z-yCIufGNXu7g0-yEbD8CPcFQJW-KDBS3vaSEm0wZmnjobvnAzI-y19ug=w2612-h1958-no",
		"https://lh3.googleusercontent.com/E3XxC5nGKNiNPvlkJZGAtkb-dE87Nj3uLydFZWYjj2nFEouB4gp4xv-uJKz-so856rHhUpCCTsMeASMXrjMNWR2hgQ4lwPHNjgPXUMDj-0vI8zzDju5Pr6JJlbo6KZMxMEFp-8G3c_v9RdCSrVRQbqqF16K-JrTgBLnBLQTS45abxXXvisShjdjcgjT7BITM8-LiYX00X9uOUf4U_XcpWTLvcQuYN5BAur1U7s7zyjkANM-Rpi4793RqbeluCECEKSUr5w-lyIBRL0iQuaFO05g-OD6djwxW4fIdImKsTu_n06TTgAkUf63w5Ut3ueREzLEkOEBrzow1QXmxcZxxZLilGCnjnNxL1a_WRr23Otm_btf9T1BNpyWlzbFehPdopP4M-Ev38eMKyKEIklxlihzXdktdvjnijka5RHPn3I7tTAUfjRItDHENhcoWzNhW-eUCkKHgJhcg7DpiL3fRt7Auct8I-TIFEVW7sFh_0aC9AlvaNx4VUIt22qEBmbwiZTU9e6eVm2VmARzkEf2t9aaH_P2gLeWMUtPiKy_qeIv75CdDFEg62vRhr4ozq1IHM6Lj8JNZl1gfxpUuIWJh9kFAU0dY5rc=w2612-h1958-no",
		"https://lh3.googleusercontent.com/SG4_-RfF-kgB5GOhBkHvXf654tMnoBPM96atpfY8Gtbpka1PnNIPB9miW-Eiz_5k01sDa77KdbhtEbh5TOPFcfg1OXa_sa-jFZJxoCIMPOSbLZDlxmyhcuinMjbL64g-8oJ1Gu7b67N-BYgktRZEQb98F45N6UZSLQ9Gflq7blFTMEPyF1d5ja9qXXFuIeyeJ3E_GzDWzKBVb7ZpR0fObW1igWwr7CoJ3hraha75GRBDC5W4VWuqfZPsVHcJwjYV9p7LCJiRLDzjUHjhJRri9iZlfsLTzvtMWI2PFUEmoQq3qE6seFHUjvhhmLN_IuM7qjG9sh4SlqByFQOh8-QTbKc-zCJ-lhBZvKWihK1fujbG-D68RY3OwFZeEpKQV5z3pW4uvILqzeXGfKsggqsYr09eeq3uDQftLLVu6KKPvuFEQ37-ZNyk2j_9B-Rr0_CfhFsVn0_yWA7L2ZI3wwlsr3Zq67tDym1hG1QPoqNicLl0nrXlblGQX9ONcRRgrRqmKtC17xaA9BJqHuh0LvUtnNlJkV9aWpqZTX5ifhNm6-x9DaKwBeMOmW0lMX9xAeSVMNRnZUAUYNt-99hqOpN7VoX967x4bDo=w2612-h1958-no"
		],
		Chile: [
		"https://lh3.googleusercontent.com/nZ4XMOVl0qyP9WzRPRPEPpYH1LWMlVXE-ryb4X3bfb7a_-8xDKLkqDCFYfXdZMPRD7w9M2PW46zcs6BWYdZv4b0FV8nCXNop7QtgOEdkidzDigw_3hPdEQj6iN_e3hBRDGGjTFXYEhu4NwD6ha7aSs1kxFHcYnL-ij2Zts35bJZmbcYbu_2i0dsgDfJNT-O_XXoSwh4MyOixEufKGLgFwPDEcLv0dgifvBlQK_U80b_E1CnEGIouIWpb3Xkug4OloXi-U4PqtQCCJrvGtgyLyGBDSKYPFpBMOK3Yg0G_MG2rZRJjuVFavN2zgwaI4eKW7DnyYONuoyN6mpzK-QmUtxNdm7Uki9ah3vkt08IoVpAB7-K7qKfyihMW6zUpyo6yRsJAAPGaKzn3_WuaCZDh-pyLJ3Q3YiOP4noS0MpZH_NIskx5kIbqaq0pWZe_d5rYdEDYVO_mGNC-X5oqGu4-hujQD99Fqkay2WeNwYn_UxGleq_hbDYT-paBnCyRQovsqAt9x39UuqCta8tb4wvepedxsmf9J7axi4yfPANHGpdixD08SPGTb6eVtWyro48iiKiXJrABseO_Lee7bDFTnZJiuUZXk-w=w3360-h1888-no",
		"https://lh3.googleusercontent.com/ec9WLpNvX_pNIMM-TJDZTOPqPirDfKHWvI5xcz5JqCUyOtZyf3NVxN54gF8COce8Dyach4RX5StXU2i1VsUV_GzklWSmRtlG_ztcM-48B3w2kRlnvMK5bJFMmcTfQNVi3K0jySOG3vtVV-Htj3kWo9siQEPDI41uATxKh0_r1UZ4T8WlcTBlL_J7jEkdZ333qaq9eanWSXtZKIJT_F2YMcanXsBRocLe5nS5cWhpAhjH-tyuLjQ-Vu54vx3bMYjvBNs9mfsGyWeOvHtdORF2Zl-8yp0dBa3PKNmPHWd2KGEY4mLzWFCDDcVb9HDk87lZ7nnvfQfmgftfTtg4GAOYCg4W82e3fpAKWU9wPchOMyH_T0q9QCaCgKNgtcNz34tdRXpFjpbnw3JPkwim6_XwjtMyHM0Ok5N6BolSznVm3Jfqia15cfOAGwNOuq2nBTgc0ul6bYbu2sdjq3kym5oAIm9GVphbQHsYHV2ASqiABF-wBQEh1Wqazsi8Bpg9mOdPQ1JF5HtyHFjKzpDqPwrmn-fLLQE-5yDrnA_L_qu5aXvTPMCQyI-REJOXKEpYe-CkzL43NoKlqRyd8eyJzlaJUNrnu8h3gn0=w3360-h1888-no",
		"https://lh3.googleusercontent.com/rqKHf2R9NEQfmKi6xCLwOjurCytsSOemBFzbGliwbELChJDTaU0VmbA4IMLLGrZwAK_Wmy1sDRQtloXyakGtZRERxLqNNwbjQm6vu1KaqJgx9Q9Ou1takafUbmxSkJqcIlR-ZJScBjCj20Pe9WhL6ORw1BQKGmLsBF847NUD_Alys_JS1BjzGq2hOgVLNhsKF6S7gBUoKZ_MQ-sv14fASNNC-t_1qy0ruGCjQcVWDYtNQUkPSoom_bCSbeQ3NFqqiFoau8b3YyxXk75bK7e-9crM2xqUsGo1VfMZRSLHHPY1B1Ha8WS3G1Be3MPOfc3pDkpChjN2HzARk9hWfnE2PZlrzrP5arsTOfvUx7JR9dyrB514lArgXLd63oGRCP2ASG11pHkzuJvqd_FQk1vIOHZP_SIAAZ6e2uCVwayHsH7qi1lpkPaQvjbrjhUFeNCmqmqufPwuNaU1xY32ZIK1nVAR7w5xc6bgOwB9yyHk3EuHRP4qlQ9K3QuyIbCDvG9-yEYnEYJ9SgGhLq8GOlbR03m0xv204_6EbkF3WtnbAmZzPAiuymWYTzvN1vjc85rvFn3JxTd0EInz9Tbz0MdL3Av63Wxy3yY=w3360-h1888-no",
		"https://lh3.googleusercontent.com/oWlbfvdm3Ncx287zkW21XM0MvQZFYgku8FqUGVcyKPOM13BsYO0R8t4_Xd1nLXwC4iPMvTOy3Wrmrs1uG9RvdvVZE35uopwJHA5jhBWTm4hVefZG3x6o3lVYdnZh8BmNKxjWSjpPhlmtQaG5v8q2H48uO9xJTQeTmLISOw8xOoEj9aWtaACi0M4KI6hAXraXiqrOsRStVz5hBDFzLUMKbchXIo994qvp5-2dQnfZY4oLoHnNbol_3ag_0ffCPUZpTFyqEj8IXy3J8jvjcLuw7d2W1VCE9BIsEzGtGJ7R3kQw9c2OvLrXe5pdGG2A_Kymvzxu5jhvrlbmshSKVrg6TB5gjTTbrcRcxx1_t8qPirO0DM996I4ye6z3etwiTNAmcdimBHclMKNVXBiT1AFDU2jSsGzdlj0pqis7aqpH3w-j2jZSSKCgu3TUS41l3tZOsrBhPuXoKfBMlZgOpvHHT_L0NWfrw_nDFR0bpW5yvHP-A0Hm4g8rnHBnbNwMoGpvRMkKP4S7LrpQlu7L1O8WZWwiJ3dSJfqd7BkrZZaZdYun0jiXlt6SuCMSA8P_T971Qcrz85bMQpIQHlGSuYEgYk8h7Gofezc=w3360-h1888-no"
		],
		MV: [
		"https://lh3.googleusercontent.com/RUrEqwWxsG186Hlq5hXLIipX59Ro94hl6CxtXIqiJ90_9_GjYv7NnrShCTX4JQcsPwuhqCH982H4YDBs0GVrJxidxcM7qmXKNdeszkUfJj0Wn1XgGfb6s1zELKTH1M5Xx36iF0IlD9r2nCyrnvnDh1ox1pl2S4jN3pXTDPKZLKD7lblASXOG_S21TTJKNMClQ9wC_bUiAg_hmRvlwHX_vH6yGeKi6vbrxOjjy8UO7XnF_3SsDK0IAifFF8a3j7xo07Mqo5ft-z2QdPsI3uGUnyZwELvjDcPUjid3zNSMnjZ7Juxnd3xM6A4MyEmCmyVDkeLlyBNm9EYw_KQUdnAJOPUgnpp0tC4CgAzvvlt-SNziJ2jfZcCBkrSs7ZMk_vciHZ4trESoU3-nEMv0Z711FcA_sRRrlAZPUMPq_7yrJcXfCuBVSqCmR4CLEamNpS7StHfrmym8RHK55-4ej_1kTyDMqEvhDDFcBU6O2eTViUsvydUc29yNafmidKkCh3Exon0p5C5CGxT0iqBFn8wG1oGBUp4y70jG6m5Pqxq4Rzc405nG4itUW8mLEv4B-ZiIxEgjsNdtsOAjhteBaj2CW8_wva4iI1k=w2272-h1704-no",
		"https://lh3.googleusercontent.com/lXmTwy3v1RvxNMm0txfqcoA-1J9UtYbH3fhtrG3uNTd-RnQpoMq3-nm4oiFoiKLFajKIX2eShgWL1lYbsFPhckWTwDf1wKkDSvmbmhp6wW4XOVNk-PizveuIy-AIAFIcHNfHUeNXzJtRwmETE4ZW4hhg3zJMJoUm2WCRoT5C5JI6hoJa9oVzToZNZl97lxGvNKP99OiOVbQ4_q8iMW1ZgyA8BFEKAdBt51S85I_S9bPUF0XfEj5gxcHVQZM5p1iCF5kLVedzAP0s3l5ljO7Z8y88l0xB4dD6Ccbeskrf8WAmcQqe6nsduW9kqJycHlVO4qNIpQkxWMNtF6rzNx0Mlsmr8DCtvVKEbuau1rKh5mn5q4dVPzHGkHJDikypPzx-x3vmLWOx0Q0MZ_s4dJu8tOYbXW2Z0i_fE414PuyUBhu7FXqI-YJOYe0-kPF0u8M3dBfZBWfteflXsePXWLjWm9T5XQEXpTuuP7XuSdED0WHDQ8ASC8xCdMEsoGCgSbRjyevjm-IHjDGUigQ_8ZUyifa_pGEzRM_8EA_FNhptmI577JINhaT4SSHmGPYM1hMl-S3qG6kwJj2YLojrSlnf6HSHqjqvdJI=w2272-h1704-no"
		]
	};



	$("#back").click(function() {
		$(".slideShow").css("display", "none")
		$("#ind").css("display", "none")
		$(".gallery").css("display", "block")
		$( "#landing").css("display", "block");
		$("#indGrid").empty();
	});

}]);




