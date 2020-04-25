<template>
  <div class="about">
    <h1>This is an about page</h1>
    <my-headline :level = '4'>标题4</my-headline>
     <my-headline :level = '2'>标题2</my-headline>
      <my-headline :level='3'>
        三级标题
        <div slot="sub">子标题</div>
      </my-headline>
  </div>
</template>
