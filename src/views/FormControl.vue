<script setup lang="ts">
import AddButton from '@/components/form-control/AddButton.vue';
import HelpText from '@/components/form-control/HelpText.vue';
import FormList from '@/components/form-control/FormList.vue';
import ListItem from '@/components/form-control/ListItem.vue';

import Container from '@/components/layout/Container.vue';

import { onMounted } from 'vue';

const accountsFromStore = onMounted(() => {
	return 1
})

</script>

<template>
	<main>
		<section class="form-control">
			<Container>
				<AddButton>Учетные записи</AddButton>
				<HelpText>Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;</HelpText>
				<FormList>
					<ListItem />
				</FormList>
			</Container>
		</section>
	</main>
</template>
<style lang="scss" scoped>
.form-control {
	display: flex;
	flex-direction: column;

	:deep(.container) {
		display: flex;
		flex-direction: column;
	}
}
</style>