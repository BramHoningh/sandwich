<style src="./DesignSystem.scss" lang="scss" scoped></style>
<script src="./DesignSystem.js"></script>

<template>
  <div class="design-system">
    <h2 class="title">
      Typography
    </h2>

    <h1>Heading 01</h1>
    <p class="p-heading-01">
      This is a heading-01 sub paragraph
    </p>
    <h2>Heading 02</h2>
    <p class="p-heading-02">
      This is a heading-02 sub paragraph
    </p>
    <h3>Heading 03</h3>
    <p>This is a paragraph</p>
    <p>This is a <a href="#" class="text-link">text link</a>.</p>
    <p>This is a <a href="#" class="text-link disabled">disabled text link</a>.</p>

    <h2 class="title">
      Colors
    </h2><br>
    <h3 class="title">
      Deep Blue
    </h3>
    <div
      class="color-tile color-tile-main"
      style="background-color: #142FDD;"
    />
    <div
      class="color-tile"
      style="background-color: #4359E4;"
    />
    <div
      class="color-tile"
      style="background-color: #7282EB;"
    />
    <div
      class="color-tile"
      style="background-color: #A1ACF2;"
    />
    <div
      class="color-tile"
      style="background-color: #D0D5F8;"
    />
    <div
      class="color-tile"
      style="background-color: #EDEFFD;"
    />
    <div
      class="color-tile"
      style="background-color: #F6F7FF;"
    />

    <h3 class="title">
      Blended Blue
    </h3>
    <div
      class="color-tile color-tile-main"
      style="background-color: #14B6DD;"
    />
    <div
      class="color-tile"
      style="background-color: #43C4E4;"
    />
    <div
      class="color-tile"
      style="background-color: #72D3EB;"
    />
    <div
      class="color-tile"
      style="background-color: #A1E2F2;"
    />
    <div
      class="color-tile"
      style="background-color: #D0F0F8;"
    />
    <div
      class="color-tile"
      style="background-color: #EDFAFD;"
    />
    <div
      class="color-tile"
      style="background-color: #F6FCFE;"
    />

    <h3 class="title">
      Almost Black
    </h3>
    <div
      class="color-tile color-tile-main"
      style="background-color: #040825;"
    />
    <div
      class="color-tile"
      style="background-color: #363A51;"
    />
    <div
      class="color-tile"
      style="background-color: #686B7C;"
    />
    <div
      class="color-tile"
      style="background-color: #9A9CA8;"
    />
    <div
      class="color-tile"
      style="background-color: #CDCED3;"
    />
    <div
      class="color-tile"
      style="background-color: #EBECEE;"
    />
    <div
      class="color-tile"
      style="background-color: #FAFAFB;"
    />

    <h3 class="title">
      Jam Red
    </h3>
    <div
      class="color-tile color-tile-main"
      style="background-color: #DD1460;"
    />
    <div
      class="color-tile"
      style="background-color: #E43376;"
    />
    <div
      class="color-tile"
      style="background-color: #F2A1C0;"
    />
    <div
      class="color-tile"
      style="background-color: #FDEDF3;"
    />

    <h3 class="title">
      Meadow Green
    </h3>
    <div
      class="color-tile color-tile-main"
      style="background-color: #14DD85;"
    />
    <div
      class="color-tile"
      style="background-color: #43E49D;"
    />
    <div
      class="color-tile"
      style="background-color: #A1F2CE;"
    />
    <div
      class="color-tile"
      style="background-color: #EDFDF6;"
    />

    <h2 class="title">
      Buttons
    </h2><br>
    <PrimaryButton
      text="Primary button"
      router-link="/design-system"
    />
    <PrimaryButton
      text="Primary hover"
      router-link="/design-system"
      state="hover"
    />
    <PrimaryButton
      text="Primary active"
      router-link="/design-system"
      state="active"
    />
    <PrimaryButton
      text="Primary disabled"
      router-link="/design-system"
      disabled
    />
    <br>
    <br>
    <SecondaryButton
      text="Secondary button"
      router-link="/design-system"
    />
    <SecondaryButton
      text="Secondary hover"
      router-link="/design-system"
      state="hover"
    />
    <SecondaryButton
      text="Secondary active"
      router-link="/design-system"
      state="active"
    />
    <SecondaryButton
      text="Secondary disabled"
      router-link="/design-system"
      disabled
    />
    <br>
    <br>
    <TertiaryButton
      text="Tertiary button"
      router-link="/design-system"
    />
    <TertiaryButton
      text="Tertiary hover"
      router-link="/design-system"
      state="hover"
    />
    <TertiaryButton
      text="Tertiary active"
      router-link="/design-system"
      state="active"
    />
    <TertiaryButton
      text="Tertiary disabled"
      router-link="/design-system"
      disabled
    />
    <br>
    <br>
    <WarningButton
      text="Warning button"
      router-link="/design-system"
    />
    <WarningButton
      text="Warning hover"
      router-link="/design-system"
      state="hover"
    />
    <WarningButton
      text="Warning active"
      router-link="/design-system"
      state="active"
    />
    <WarningButton
      text="Warning disabled"
      router-link="/design-system"
      disabled
    />
    <br>
    <br>
    <PrimaryIconButton
      icon="vue"
    />
    <PrimaryIconButton
      icon="vue"
      state="hover"
    />
    <PrimaryIconButton
      icon="vue"
      state="active"
    />
    <PrimaryIconButton
      icon="vue"
      disabled
    />
    <br>
    <br>
    <SecondaryIconButton
      icon="vue"
    />
    <SecondaryIconButton
      icon="vue"
      state="hover"
    />
    <SecondaryIconButton
      icon="vue"
      state="active"
    />
    <SecondaryIconButton
      icon="vue"
      disabled
    />
    <br>
    <br>
    <h2 class="title">Input</h2>
    <br>
    <InputField
      label="label"
      error-message="Error message"
    />
  </div>
</template>
