
plugins {
    alias(libs.plugins.android.application) apply false
    alias(libs.plugins.kotlin.android) apply false
    alias(libs.plugins.kotlin.compose) apply false
}
buildscript {
    dependencies {
        classpath(libs.google.services)
    }
}

allprojects {
    repositories {
        google()
        mavenCentral()
    }
}
