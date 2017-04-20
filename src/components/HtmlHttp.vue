<template>
	<div class="bodyContainer">
		<h1 class="text-center">HTML and HTTP</h1>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, lorem nec auctor congue,
			risus magna porta leo, venenatis mattis ipsum orci quis justo. In vel massa accumsan, ultrices felis quis,
			efficitur velit. Fusce ac cursus metus. Duis risus ante, eleifend nec luctus congue, interdum ultricies diam.
			Phasellus condimentum ante sapien, sed aliquam nisi pulvinar eu. Aliquam tempor luctus auctor. Nullam mollis
			lobortis lacus, sit amet aliquet urna vestibulum id. Pellentesque augue odio, mattis in blandit quis, bibendum
			eu felis.

			Cras mattis lorem aliquam iaculis consectetur. In imperdiet porta sollicitudin. In ut tristique magna. Ut sit amet
			gravida nulla. Maecenas lacus risus, vehicula nec cursus sed, iaculis eget enim. Vestibulum sit amet elementum ipsum.
			Duis vel dolor mi. Sed ac erat sodales, pellentesque purus nec, faucibus nisl. Vestibulum hendrerit eget ante vitae
			posuere. Integer molestie id nisl et commodo.
		</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, lorem nec auctor congue,
			risus magna porta leo, venenatis mattis ipsum orci quis justo. In vel massa accumsan, ultrices felis quis,
			efficitur velit. Fusce ac cursus metus. Duis risus ante, eleifend nec luctus congue, interdum ultricies diam.
			Phasellus condimentum ante sapien, sed aliquam nisi pulvinar eu. Aliquam tempor luctus auctor. Nullam mollis
			lobortis lacus, sit amet aliquet urna vestibulum id. Pellentesque augue odio, mattis in blandit quis, bibendum
			eu felis.

			Cras mattis lorem aliquam iaculis consectetur. In imperdiet porta sollicitudin. In ut tristique magna. Ut sit amet
			gravida nulla. Maecenas lacus risus, vehicula nec cursus sed, iaculis eget enim. Vestibulum sit amet elementum ipsum.
			Duis vel dolor mi. Sed ac erat sodales, pellentesque purus nec, faucibus nisl. Vestibulum hendrerit eget ante vitae
			posuere. Integer molestie id nisl et commodo.
		</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, lorem nec auctor congue,
			risus magna porta leo, venenatis mattis ipsum orci quis justo. In vel massa accumsan, ultrices felis quis,
			efficitur velit. Fusce ac cursus metus. Duis risus ante, eleifend nec luctus congue, interdum ultricies diam.
			Phasellus condimentum ante sapien, sed aliquam nisi pulvinar eu. Aliquam tempor luctus auctor. Nullam mollis
			lobortis lacus, sit amet aliquet urna vestibulum id. Pellentesque augue odio, mattis in blandit quis, bibendum
			eu felis.

			Cras mattis lorem aliquam iaculis consectetur. In imperdiet porta sollicitudin. In ut tristique magna. Ut sit amet
			gravida nulla. Maecenas lacus risus, vehicula nec cursus sed, iaculis eget enim. Vestibulum sit amet elementum ipsum.
			Duis vel dolor mi. Sed ac erat sodales, pellentesque purus nec, faucibus nisl. Vestibulum hendrerit eget ante vitae
			posuere. Integer molestie id nisl et commodo.
		</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, lorem nec auctor congue,
			risus magna porta leo, venenatis mattis ipsum orci quis justo. In vel massa accumsan, ultrices felis quis,
			efficitur velit. Fusce ac cursus metus. Duis risus ante, eleifend nec luctus congue, interdum ultricies diam.
			Phasellus condimentum ante sapien, sed aliquam nisi pulvinar eu. Aliquam tempor luctus auctor. Nullam mollis
			lobortis lacus, sit amet aliquet urna vestibulum id. Pellentesque augue odio, mattis in blandit quis, bibendum
			eu felis.

			Cras mattis lorem aliquam iaculis consectetur. In imperdiet porta sollicitudin. In ut tristique magna. Ut sit amet
			gravida nulla. Maecenas lacus risus, vehicula nec cursus sed, iaculis eget enim. Vestibulum sit amet elementum ipsum.
			Duis vel dolor mi. Sed ac erat sodales, pellentesque purus nec, faucibus nisl. Vestibulum hendrerit eget ante vitae
			posuere. Integer molestie id nisl et commodo.
		</p>
		<p></p>
	</div>
</template>
<script>
	import {wwwLinks} from '../service/SidebarLinks';
	import bus from '../service/Bus';
	export default{
		name: 'html_http',
		created(){
			bus.$emit('setNavLinks', wwwLinks);
		}
	}
</script>
