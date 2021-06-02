import { mount } from "@vue/test-utils";
import App from "@/App.vue";

test('App.vue muestra el titulo de las notas dentro de una lista | Asegúrate de que App.vue defina en su función data la propiedad "notas", y que el titulo de los elementos sea desplegado en una lista', async () => {
  const notas = [{ titulo: "testing 12" }, { titulo: "testing 13" }];

  const wrapper = mount(App, {
    data(){
      return {
        notas: []
      }
    }
  });

  await wrapper.setData({notas: notas})

  const listItems = wrapper.findAll("li");

  for (let i = 0; i < listItems.length; i++) {
    const item = listItems[i];
    expect(item.text()).toBe(notas[i].titulo);
  }

  expect(listItems.length).toBe(2);
});
