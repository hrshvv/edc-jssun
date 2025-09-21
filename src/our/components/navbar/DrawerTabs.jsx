import React from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';

const DrawerTabs = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9">
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Navigation</DrawerTitle>
          <DrawerDescription>Choose a page to navigate to</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-2 p-4">
          <DrawerClose asChild>
            <Link to="/">
              <Button variant="ghost" className="justify-start w-full">
                Home
              </Button>
            </Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link to="/team">
              <Button variant="ghost" className="justify-start w-full">
                Team
              </Button>
            </Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link to="/events">
              <Button variant="ghost" className="justify-start w-full">
                Events
              </Button>
            </Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link to="/about">
              <Button variant="ghost" className="justify-start w-full">
                About
              </Button>
            </Link>
          </DrawerClose>

          {/* Connect Button for Mobile */}
          <div className="pt-3 mt-2 border-t border-border">
            <Button className="w-full">Connect</Button>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3">
            Close
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerTabs;
