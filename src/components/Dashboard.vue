<template>
    <div>
        <TransitionRoot as="template" :show="sidebarOpen">
            <Dialog
                as="div"
                class="fixed inset-0 flex z-40 md:hidden"
                @close="sidebarOpen = false"
            >
                <TransitionChild
                    as="template"
                    enter="transition-opacity ease-linear duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <DialogOverlay
                        class="fixed inset-0 bg-gray-600 bg-opacity-75"
                    />
                </TransitionChild>
                <TransitionChild
                    as="template"
                    enter="transition ease-in-out duration-300 transform"
                    enter-from="-translate-x-full"
                    enter-to="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leave-from="translate-x-0"
                    leave-to="-translate-x-full"
                >
                    <div
                        class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700"
                    >
                        <TransitionChild
                            as="template"
                            enter="ease-in-out duration-300"
                            enter-from="opacity-0"
                            enter-to="opacity-100"
                            leave="ease-in-out duration-300"
                            leave-from="opacity-100"
                            leave-to="opacity-0"
                        >
                            <div class="absolute top-0 right-0 -mr-12 pt-2">
                                <button
                                    type="button"
                                    class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    @click="sidebarOpen = false"
                                >
                                    <span class="sr-only">Close sidebar</span>
                                    <XIcon
                                        class="h-6 w-6 text-white"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                        </TransitionChild>
                        <div
                            class="flex-shrink-0 flex items-center px-4 text-xl text-white"
                        >
                            Browser APIs playground
                        </div>
                        <div class="mt-5 flex-1 h-0 overflow-y-auto">
                            <nav class="px-2 space-y-1">
                                <a
                                    v-for="item in filteredNavigation"
                                    :key="item.name"
                                    href="#"
                                    :class="[
                                        $route.name === item.routeName
                                            ? 'bg-indigo-800 text-white'
                                            : 'text-indigo-100 hover:bg-indigo-600',
                                        'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                                    ]"
                                    @click.prevent="
                                        $router.push({ name: item.routeName })
                                    "
                                >
                                    <component
                                        :is="item.icon"
                                        class="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
                                        aria-hidden="true"
                                    />
                                    {{ item.name }}
                                </a>
                            </nav>
                        </div>
                    </div>
                </TransitionChild>
                <div class="flex-shrink-0 w-14" aria-hidden="true">
                    <!-- Dummy element to force sidebar to shrink to fit close icon -->
                </div>
            </Dialog>
        </TransitionRoot>

        <!-- Static sidebar for desktop -->
        <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div
                class="flex flex-col flex-grow pt-5 bg-indigo-700 overflow-y-auto"
            >
                <div
                    class="flex items-center flex-shrink-0 px-4 text-xl text-white"
                >
                    Browser APIs playground
                </div>
                <div class="mt-5 flex-1 flex flex-col">
                    <nav class="flex-1 px-2 pb-4 space-y-1">
                        <a
                            v-for="item in filteredNavigation"
                            :key="item.name"
                            href="#"
                            :class="[
                                $route.name === item.routeName
                                    ? 'bg-indigo-800 text-white'
                                    : 'text-indigo-100 hover:bg-indigo-600',
                                'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                            ]"
                            @click.prevent="
                                $router.push({ name: item.routeName })
                            "
                        >
                            <component
                                :is="item.icon"
                                class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
                                aria-hidden="true"
                            />
                            {{ item.name }}
                        </a>
                    </nav>
                </div>
            </div>
        </div>
        <div class="md:pl-64 flex flex-col flex-1">
            <div
                class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow"
            >
                <button
                    type="button"
                    class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                    @click="sidebarOpen = true"
                >
                    <span class="sr-only">Open sidebar</span>
                    <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
                </button>
                <div class="flex-1 px-4 flex justify-between">
                    <div class="flex-1 flex">
                        <form
                            class="w-full flex md:ml-0"
                            action="#"
                            method="GET"
                        >
                            <label for="search-field" class="sr-only"
                                >Search</label
                            >
                            <div
                                class="relative w-full text-gray-400 focus-within:text-gray-600"
                            >
                                <div
                                    class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                                >
                                    <SearchIcon
                                        class="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </div>
                                <input
                                    id="search-field"
                                    class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                                    placeholder="Search"
                                    name="search"
                                    @keydown.enter.prevent="onSearch"
                                    @input.prevent="onSearch"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <main>
                <div class="py-6">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                        <slot />
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue';
import {
    BellIcon,
    MenuAlt2Icon,
    XIcon,
    DeviceMobileIcon,
} from '@heroicons/vue/outline';
import { SearchIcon } from '@heroicons/vue/solid';
import { NomRoutes } from '@/router';

const navigation = [
    {
        name: 'Page Visibility API',
        routeName: NomRoutes.PageVisibilityAPI,
    },
    {
        name: 'Console API',
        routeName: NomRoutes.ConsoleAPI,
    },
    {
        name: 'Fullscreen API',
        routeName: NomRoutes.FullscreenAPI,
    },
    {
        name: 'Web Periodic Background Synchronization API',
        routeName: NomRoutes.WebPeriodicBackgroundSynchronizationAPI,
    },
    {
        name: 'Web Share API',
        routeName: NomRoutes.WebShareAPI,
    },
    {
        name: 'Broadcast Channel API',
        routeName: NomRoutes.BroadcastChannelApi,
    },
    {
        name: 'Screen Orientation API',
        routeName: NomRoutes.ScreenOrientationApi,
        icon: DeviceMobileIcon,
    },
    {
        name: 'Barcode Detection API',
        routeName: NomRoutes.BarcodeDetectionApi,
        icon: DeviceMobileIcon,
    },
];

export default {
    components: {
        Dialog,
        DialogOverlay,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        TransitionChild,
        TransitionRoot,
        BellIcon,
        MenuAlt2Icon,
        SearchIcon,
        XIcon,
    },
    data: () => ({
        filter: '',
    }),
    methods: {
        onSearch(event) {
            this.filter = event.target.value;
        },
    },
    computed: {
        filteredNavigation() {
            if (!this.filter) return navigation;
            return navigation.filter((n) =>
                n.name.toLowerCase().includes(this.filter.toLowerCase())
            );
        },
    },
    setup() {
        const sidebarOpen = ref(false);

        return {
            navigation,
            sidebarOpen,
        };
    },
};
</script>
